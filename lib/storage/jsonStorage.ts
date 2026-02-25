// Unified storage for beta signups.
// - On Netlify (production/preview): uses @netlify/blobs for durable persistence.
// - Local dev: falls back to a local JSON file.

import fs from 'fs';
import path from 'path';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BetaSignup {
  id: string;
  email: string;
  name: string | null;
  productSlug: string;
  productName: string;
  message: string | null;
  status: 'pending' | 'invited' | 'accepted' | 'declined';
  invitedAt: string | null;
  acceptedAt: string | null;
  createdAt: string;
}

// ─── Helpers: detect environment ─────────────────────────────────────────────

function isNetlify(): boolean {
  return !!(process.env.NETLIFY || process.env.NETLIFY_BLOBS_CONTEXT);
}

// ─── Netlify Blobs backend ────────────────────────────────────────────────────

const BLOB_STORE_NAME = 'beta-signups';
const BLOB_KEY = 'signups.json';

async function blobsGetAll(): Promise<BetaSignup[]> {
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore(BLOB_STORE_NAME);
    const data = await store.get(BLOB_KEY, { type: 'json' });
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error('[blobStorage] Failed to load signups from Netlify Blobs:', e);
    return [];
  }
}

async function blobsSaveAll(signups: BetaSignup[]): Promise<void> {
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore(BLOB_STORE_NAME);
    await store.setJSON(BLOB_KEY, signups);
  } catch (e) {
    console.error('[blobStorage] Failed to save signups to Netlify Blobs:', e);
  }
}

// ─── Local JSON file backend ──────────────────────────────────────────────────

const LOCAL_PATH = path.join(process.cwd(), 'data', 'beta-signups.json');

function ensureLocalDir() {
  const dir = path.dirname(LOCAL_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function localLoadAll(): BetaSignup[] {
  try {
    ensureLocalDir();
    if (fs.existsSync(LOCAL_PATH)) {
      const raw = fs.readFileSync(LOCAL_PATH, 'utf-8');
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    console.error('[jsonStorage] Failed to load signups from local file:', e);
  }
  return [];
}

function localSaveAll(signups: BetaSignup[]): void {
  try {
    ensureLocalDir();
    fs.writeFileSync(LOCAL_PATH, JSON.stringify(signups, null, 2));
  } catch (e) {
    console.error('[jsonStorage] Failed to save signups to local file:', e);
  }
}

// ─── Unified storage API ──────────────────────────────────────────────────────

async function getAll(): Promise<BetaSignup[]> {
  if (isNetlify()) return blobsGetAll();
  return localLoadAll();
}

async function saveAll(signups: BetaSignup[]): Promise<void> {
  if (isNetlify()) return blobsSaveAll(signups);
  localSaveAll(signups);
}

export const jsonStorage = {
  async findMany(where?: { productSlug?: string; status?: string }): Promise<BetaSignup[]> {
    let signups = await getAll();
    if (where?.productSlug) signups = signups.filter(s => s.productSlug === where.productSlug);
    if (where?.status) signups = signups.filter(s => s.status === where.status);
    return signups.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async findUnique(where: { email_productSlug: { email: string; productSlug: string } }): Promise<BetaSignup | null> {
    const signups = await getAll();
    return signups.find(
      s => s.email === where.email_productSlug.email &&
           s.productSlug === where.email_productSlug.productSlug
    ) ?? null;
  },

  async create(data: { data: Omit<BetaSignup, 'id' | 'createdAt'> }): Promise<BetaSignup> {
    const signups = await getAll();
    const newSignup: BetaSignup = {
      ...data.data,
      id: `signup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    signups.push(newSignup);
    await saveAll(signups);
    return newSignup;
  },

  async update(params: { where: { id: string }; data: Partial<BetaSignup> }): Promise<BetaSignup | null> {
    const signups = await getAll();
    const index = signups.findIndex(s => s.id === params.where.id);
    if (index === -1) return null;
    signups[index] = { ...signups[index], ...params.data };
    await saveAll(signups);
    return signups[index];
  },

  async delete(where: { id: string }): Promise<boolean> {
    const signups = await getAll();
    const filtered = signups.filter(s => s.id !== where.id);
    if (filtered.length === signups.length) return false;
    await saveAll(filtered);
    return true;
  },
};

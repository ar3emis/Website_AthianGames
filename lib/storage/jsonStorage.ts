// Fallback JSON storage for beta signups when Prisma database is not available
// This works on Netlify serverless functions

import fs from 'fs';
import path from 'path';

const STORAGE_PATH = path.join(process.cwd(), 'data', 'beta-signups.json');

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

// Ensure storage directory exists
function ensureStorageDir() {
  const dir = path.dirname(STORAGE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load signups from JSON file
function loadSignups(): BetaSignup[] {
  try {
    ensureStorageDir();
    if (fs.existsSync(STORAGE_PATH)) {
      const data = fs.readFileSync(STORAGE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Failed to load signups:', error);
  }
  return [];
}

// Save signups to JSON file
function saveSignups(signups: BetaSignup[]): boolean {
  try {
    ensureStorageDir();
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(signups, null, 2));
    return true;
  } catch (error) {
    console.error('Failed to save signups:', error);
    return false;
  }
}

export const jsonStorage = {
  // Find all signups
  async findMany(where?: { productSlug?: string; status?: string }): Promise<BetaSignup[]> {
    let signups = loadSignups();
    
    if (where?.productSlug) {
      signups = signups.filter(s => s.productSlug === where.productSlug);
    }
    if (where?.status) {
      signups = signups.filter(s => s.status === where.status);
    }
    
    return signups.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // Find one signup by email and product
  async findUnique(where: { email_productSlug: { email: string; productSlug: string } }): Promise<BetaSignup | null> {
    const signups = loadSignups();
    const signup = signups.find(
      s => s.email === where.email_productSlug.email && 
           s.productSlug === where.email_productSlug.productSlug
    );
    return signup || null;
  },

  // Create a new signup
  async create(data: { data: Omit<BetaSignup, 'id' | 'createdAt'> }): Promise<BetaSignup> {
    const signups = loadSignups();
    const newSignup: BetaSignup = {
      ...data.data,
      id: `signup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    signups.push(newSignup);
    saveSignups(signups);
    return newSignup;
  },

  // Update a signup
  async update(params: { where: { id: string }; data: Partial<BetaSignup> }): Promise<BetaSignup | null> {
    const signups = loadSignups();
    const index = signups.findIndex(s => s.id === params.where.id);
    
    if (index === -1) return null;
    
    signups[index] = { ...signups[index], ...params.data };
    saveSignups(signups);
    return signups[index];
  },

  // Delete a signup
  async delete(where: { id: string }): Promise<boolean> {
    const signups = loadSignups();
    const filtered = signups.filter(s => s.id !== where.id);
    
    if (filtered.length === signups.length) return false;
    
    saveSignups(filtered);
    return true;
  },
};


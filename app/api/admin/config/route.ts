import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const CONFIG_FILE = path.join(process.cwd(), 'lib', 'config', 'siteConfig.json');

// Check if request is from localhost
function isLocalhost(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  return (
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1') ||
    hostname.startsWith('192.168.')
  );
}

// GET - Load current configuration
export async function GET(request: NextRequest) {
  // Only allow from localhost
  if (!isLocalhost(request)) {
    return NextResponse.json(
      { error: 'Access denied - localhost only' },
      { status: 403 }
    );
  }

  try {
    // Try to read existing config file
    try {
      const fileContent = await fs.readFile(CONFIG_FILE, 'utf-8');
      const config = JSON.parse(fileContent);
      return NextResponse.json({ config });
    } catch (error) {
      // If file doesn't exist, return default config
      const { defaultSiteConfig } = await import('@/lib/config/siteConfig');
      return NextResponse.json({ config: defaultSiteConfig });
    }
  } catch (error) {
    console.error('Error loading config:', error);
    return NextResponse.json(
      { error: 'Failed to load configuration' },
      { status: 500 }
    );
  }
}

// POST - Save configuration
export async function POST(request: NextRequest) {
  // Only allow from localhost
  if (!isLocalhost(request)) {
    return NextResponse.json(
      { error: 'Access denied - localhost only' },
      { status: 403 }
    );
  }

  try {
    const config = await request.json();

    // Validate config structure
    if (!config.youtube || !config.patreon || !config.trailer) {
      return NextResponse.json(
        { error: 'Invalid configuration structure' },
        { status: 400 }
      );
    }

    // Ensure the config directory exists
    const configDir = path.dirname(CONFIG_FILE);
    try {
      await fs.access(configDir);
    } catch {
      await fs.mkdir(configDir, { recursive: true });
    }

    // Write config to file
    await fs.writeFile(
      CONFIG_FILE,
      JSON.stringify(config, null, 2),
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'Configuration saved successfully'
    });
  } catch (error) {
    console.error('Error saving config:', error);
    return NextResponse.json(
      { error: 'Failed to save configuration' },
      { status: 500 }
    );
  }
}

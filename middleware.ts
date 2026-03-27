import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Skip middleware for API routes, static files, and other Next.js internals
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // Check if the request is coming from the docs subdomain
  if (hostname.startsWith('docs.')) {
    // Extract the product slug from the path
    const path = url.pathname;

    // If on docs subdomain, rewrite to /docs route
    return NextResponse.rewrite(new URL(`/docs${path}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - api routes (including /api/auth/*)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!api/|_next/static|_next/image|favicon.ico).*)',
  ],
};

let PrismaClient: any;
try {
  // Use dynamic require to avoid static bundling attempts by Next.js
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  PrismaClient = eval("require")('@prisma/client').PrismaClient;
} catch (e) {
  console.warn('Prisma client not available; using JSON storage fallback.');
  PrismaClient = undefined;
}

const globalForPrisma = globalThis as unknown as { prisma: any };

// If PrismaClient isn't available, export a Proxy that throws a recognisable
// error on every property access — this lets the route's catch(dbError) block
// catch it and fall back to jsonStorage cleanly.
function makePrismaStub() {
  return new Proxy({} as any, {
    get(_target, prop) {
      throw new Error(
        `Prisma is not available (property "${String(prop)}" accessed). ` +
        `Run \`npx prisma generate\` to enable DB support.`
      );
    },
  });
}

export const prisma: any =
  globalForPrisma.prisma ??
  (PrismaClient
    ? new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
      })
    : makePrismaStub());

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

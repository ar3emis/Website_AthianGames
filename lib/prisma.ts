let PrismaClient: any;
try {
  // Use dynamic require to avoid static bundling attempts by Next.js
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  PrismaClient = eval("require")('@prisma/client').PrismaClient;
} catch (e) {
  console.warn('Prisma client is not available; falling back to a stub. Install and run `npx prisma generate` for full DB support.');
  PrismaClient = undefined;
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  (PrismaClient
    ? new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
      })
    : ({} as any));

if (process.env.NODE_ENV !== 'production' && PrismaClient) globalForPrisma.prisma = prisma;

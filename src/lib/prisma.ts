import { PrismaClient } from '@prisma/client'

/**
 * Prisma v7 Singleton for Prisma Postgres / Accelerate.
 * 
 * The "client" engine explicitly requires 'accelerateUrl' to be passed 
 * in the constructor when using the Prisma Postgres managed service.
 */
const prismaClientSingleton = () => {
  const rawUrl = process.env.POSTGRES_PRISMA_DATABASE_URL || process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL || '';
  const url = rawUrl.startsWith('postgres://') ? rawUrl.replace('postgres://', 'prisma+postgres://') : rawUrl;

  return new PrismaClient({
    // @ts-ignore - 'accelerateUrl' is the required property for the Prisma 7 "client" engine
    accelerateUrl: url,
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

import { PrismaClient } from '@prisma/client'

/**
 * Prisma v7 Final Production Singleton.
 * 
 * Prisma 7 Prisma Postgres requires:
 * 1. The URL protocol to be 'prisma+postgres://'
 * 2. The URL to be passed as 'accelerateUrl' in the constructor.
 */
const prismaClientSingleton = () => {
  const rawUrl = process.env.POSTGRES_PRISMA_URL || process.env.POSTGRES_PRISMA_DATABASE_URL || process.env.DATABASE_URL || '';
  const url = rawUrl.replace(/^postgres(ql)?:\/\//, 'prisma+postgres://');

  return new PrismaClient({
    // @ts-ignore - 'accelerateUrl' is the ONLY way to connect Prisma 7 to Prisma Postgres
    accelerateUrl: url,
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

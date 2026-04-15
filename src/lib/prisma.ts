import { PrismaClient } from '@prisma/client'

/**
 * Prisma v7 Singleton with explicit datasource URL.
 * We use the 'datasources' object which is the standard way to provide the connection string.
 */
const prismaClientSingleton = () => {
  const url = process.env.POSTGRES_PRISMA_DATABASE_URL || process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL;
  
  return new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

import { PrismaClient } from '@prisma/client'

/**
 * Prisma v7 requires the connection URL to be passed to the PrismaClient
 * constructor (it is no longer read from the datasource block in schema.prisma).
 *
 * POSTGRES_PRISMA_URL  — pooled connection (pgBouncer), used for all queries.
 * POSTGRES_URL_NON_POOLING — direct connection, used only for migrations via
 *                             prisma.config.ts; not needed by the client here.
 */
const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

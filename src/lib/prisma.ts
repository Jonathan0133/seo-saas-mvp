import { PrismaClient } from '@prisma/client'

/**
 * Prisma v7 Standard Singleton.
 * 
 * This follows the official recommended pattern for Next.js 
 * and relies on Prisma's automatic environment loading.
 */
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['error', 'warn'],
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

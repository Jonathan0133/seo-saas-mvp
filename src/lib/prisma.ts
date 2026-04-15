import { PrismaClient } from '@prisma/client'

/**
 * Prisma v7 Stable Singleton.
 * 
 * By using 'engineType = "library"' in the schema, we can return 
 * to the standard initialization which is most stable on Vercel.
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

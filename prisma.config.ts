import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    // Vercel Postgres uses: POSTGRES_PRISMA_URL & POSTGRES_URL_NON_POOLING
    // Prisma Postgres uses: POSTGRES_PRISMA_DATABASE_URL
    url: process.env.POSTGRES_PRISMA_DATABASE_URL || process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL!,
    ...(process.env.POSTGRES_URL_NON_POOLING
      ? { directUrl: process.env.POSTGRES_URL_NON_POOLING }
      : {}),
  },
})

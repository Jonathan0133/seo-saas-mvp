import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    // POSTGRES_PRISMA_URL  — pooled connection (via pgBouncer on Vercel Postgres)
    // POSTGRES_URL_NON_POOLING — direct connection used only for migrations
    url: process.env.POSTGRES_PRISMA_URL!,
    ...(process.env.POSTGRES_URL_NON_POOLING
      ? { directUrl: process.env.POSTGRES_URL_NON_POOLING }
      : {}),
  },
})

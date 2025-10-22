import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "postgresql://neondb_owner:npg_acTsAW6BuyU3@ep-late-queen-agmlor5p-pooler.c-2.eu-central-1.aws.neon.tech/neondb",
  },
});

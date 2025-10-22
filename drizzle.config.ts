import { defineConfig } from "drizzle-kit";

// MySQL database configuration

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER || "root",
    database: process.env.DB_NAME || "mitrasafety",
  },
});

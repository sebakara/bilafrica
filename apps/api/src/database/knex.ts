import path from "node:path";
import knex, { type Knex } from "knex";
import { seedAdminIfEmpty, seedInsightsIfEmpty, seedSiteContent } from "@/database/seed";

let ready: Promise<Knex> | null = null;

export function connectionConfig(): Knex.Config {
  return {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST ?? "127.0.0.1",
      port: Number(process.env.MYSQL_PORT ?? 3306),
      user: process.env.MYSQL_USER ?? "bil",
      password: process.env.MYSQL_PASSWORD ?? "bil",
      database: process.env.MYSQL_DATABASE ?? "bil",
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.join(process.cwd(), "src/database/migrations"),
      loadExtensions: [".cjs"],
    },
  };
}

export function db() {
  if (!ready) {
    const database = knex(connectionConfig());
    ready = database.migrate
      .latest()
      .then(() => seedInsightsIfEmpty(database))
      .then(() => seedAdminIfEmpty(database))
      .then(() => seedSiteContent(database))
      .then(() => database);
  }

  return ready;
}

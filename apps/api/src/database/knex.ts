import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import knex, { type Knex } from "knex";
import { seedAdminIfEmpty, seedInsightsIfEmpty, seedSiteContent } from "@/database/seed";

loadRootEnv();

let ready: Promise<Knex> | null = null;

function loadRootEnv() {
  const candidates = [path.resolve(process.cwd(), ".env"), path.resolve(process.cwd(), "../../.env")];

  for (const file of candidates) {
    if (!existsSync(file)) continue;

    for (const rawLine of readFileSync(file, "utf8").split("\n")) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const eq = line.indexOf("=");
      if (eq <= 0) continue;
      const key = line.slice(0, eq).trim();
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key) || process.env[key] !== undefined) continue;
      let value = line.slice(eq + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
    return;
  }
}

function databaseHost() {
  const host = process.env.MYSQL_HOST || "127.0.0.1";
  if (existsSync("/.dockerenv") && (host === "127.0.0.1" || host === "localhost")) {
    return "host.docker.internal";
  }
  return host;
}

export function connectionConfig(): Knex.Config {
  return {
    client: "mysql2",
    connection: {
      host: databaseHost(),
      port: Number(process.env.MYSQL_PORT || 3306),
      user: process.env.MYSQL_USER || "bil",
      password: process.env.MYSQL_PASSWORD || "bil",
      database: process.env.MYSQL_DATABASE || "bil",
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

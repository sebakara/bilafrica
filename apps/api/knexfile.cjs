const fs = require("node:fs");
const path = require("node:path");

for (const file of [path.resolve(process.cwd(), ".env"), path.resolve(process.cwd(), "../../.env")]) {
  if (!fs.existsSync(file)) continue;
  for (const rawLine of fs.readFileSync(file, "utf8").split("\n")) {
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
  break;
}

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER || "bil",
    password: process.env.MYSQL_PASSWORD || "bil",
    database: process.env.MYSQL_DATABASE || "bil",
  },
  pool: { min: 0, max: 10 },
  migrations: {
    directory: "./src/database/migrations",
    loadExtensions: [".cjs"],
  },
};

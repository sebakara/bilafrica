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

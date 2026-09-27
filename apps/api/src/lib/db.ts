import mysql from "mysql2/promise";
import { insights as seedInsights, type Insight } from "@bil/shared";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST ?? "127.0.0.1",
  port: Number(process.env.MYSQL_PORT ?? 3306),
  user: process.env.MYSQL_USER ?? "bil",
  password: process.env.MYSQL_PASSWORD ?? "bil",
  database: process.env.MYSQL_DATABASE ?? "bil",
  waitForConnections: true,
  connectionLimit: 10,
});

let ready: Promise<void> | null = null;

export function database() {
  if (!ready) {
    ready = migrate();
  }

  return ready.then(() => pool);
}

async function migrate() {
  const connection = await pool.getConnection();

  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS insights (
        id VARCHAR(64) PRIMARY KEY,
        slug VARCHAR(160) NOT NULL UNIQUE,
        title VARCHAR(255) NOT NULL,
        subtitle VARCHAR(255) NULL,
        summary TEXT NOT NULL,
        kind VARCHAR(40) NOT NULL,
        category VARCHAR(80) NOT NULL,
        topics JSON NOT NULL,
        publication_date DATE NOT NULL,
        reading_time VARCHAR(40) NOT NULL,
        featured TINYINT NOT NULL,
        sample TINYINT NOT NULL,
        authors JSON NOT NULL,
        content JSON NOT NULL
      )
    `);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        full_name VARCHAR(200) NOT NULL,
        organisation VARCHAR(200) NOT NULL,
        email VARCHAR(320) NOT NULL,
        phone VARCHAR(40) NULL,
        country VARCHAR(80) NULL,
        interest VARCHAR(80) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(320) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const [rows] = await connection.query<mysql.RowDataPacket[]>("SELECT COUNT(*) AS total FROM insights");
    const total = Number(rows[0]?.total ?? 0);

    if (total === 0) {
      for (const insight of seedInsights) {
        await connection.query(
          `INSERT INTO insights
            (id, slug, title, subtitle, summary, kind, category, topics, publication_date, reading_time, featured, sample, authors, content)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            insight.id,
            insight.slug,
            insight.title,
            insight.subtitle ?? null,
            insight.summary,
            insight.kind,
            insight.category,
            JSON.stringify(insight.topics),
            insight.publicationDate,
            insight.readingTime,
            insight.featured ? 1 : 0,
            insight.sample ? 1 : 0,
            JSON.stringify(insight.authors),
            JSON.stringify(insight.content),
          ],
        );
      }
    }
  } finally {
    connection.release();
  }
}

type InsightRow = mysql.RowDataPacket & {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  summary: string;
  kind: Insight["kind"];
  category: Insight["category"];
  topics: string | string[];
  publication_date: Date | string;
  reading_time: string;
  featured: number;
  sample: number;
  authors: string | string[];
  content: string | Insight["content"];
};

function parseJson<T>(value: string | T): T {
  return typeof value === "string" ? (JSON.parse(value) as T) : value;
}

export function mapInsight(row: InsightRow): Insight {
  const publicationDate =
    row.publication_date instanceof Date
      ? row.publication_date.toISOString().slice(0, 10)
      : String(row.publication_date).slice(0, 10);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    summary: row.summary,
    kind: row.kind,
    category: row.category,
    topics: parseJson<string[]>(row.topics),
    publicationDate,
    readingTime: row.reading_time,
    featured: Boolean(row.featured),
    sample: Boolean(row.sample),
    authors: parseJson<string[]>(row.authors),
    content: parseJson<Insight["content"]>(row.content),
  };
}

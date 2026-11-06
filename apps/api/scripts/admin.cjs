#!/usr/bin/env node
// Manage admin logins directly in the database. Passwords are typed at a
// hidden prompt and stored only as scrypt hashes; they never go in a file.
//
// Run from apps/api (in production: docker compose exec api node scripts/admin.cjs ...)
//   node scripts/admin.cjs set <email>      create the admin, or reset its password
//   node scripts/admin.cjs remove <email>   delete the admin
//   node scripts/admin.cjs list             show admin emails

const { randomBytes, scryptSync } = require("node:crypto");
const readline = require("node:readline");
const knex = require("knex");
const config = require("../knexfile.cjs");

const MIN_LENGTH = 12;

// Same format as src/services/password.service.ts, so logins verify.
function hashPassword(password) {
  const salt = randomBytes(16).toString("base64url");
  const hash = scryptSync(password, salt, 64).toString("base64url");
  return `${salt}.${hash}`;
}

function ask(question, hidden) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (hidden) {
      rl._writeToOutput = (text) => {
        if (text.includes(question)) rl.output.write(text);
      };
    }
    rl.question(question, (answer) => {
      rl.close();
      if (hidden) process.stdout.write("\n");
      resolve(answer);
    });
  });
}

async function readPassword() {
  if (!process.stdin.isTTY) {
    throw new Error("Run this in an interactive terminal so the password can be typed at a hidden prompt.");
  }
  const first = await ask("New password: ", true);
  if (first.length < MIN_LENGTH) throw new Error(`Use at least ${MIN_LENGTH} characters.`);
  const second = await ask("Repeat password: ", true);
  if (first !== second) throw new Error("The passwords did not match.");
  return first;
}

function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Give a valid email address.");
  return email;
}

async function main() {
  const [command, rawEmail] = process.argv.slice(2);
  if (!["set", "remove", "list"].includes(command)) {
    console.log("Usage: node scripts/admin.cjs set <email> | remove <email> | list");
    process.exitCode = 1;
    return;
  }

  const email = command === "list" ? null : normalizeEmail(rawEmail);

  const database = knex(config);
  try {
    await database.migrate.latest();

    if (command === "list") {
      const rows = await database("admins").select("email", "created_at").orderBy("email");
      if (rows.length === 0) console.log("No admins yet.");
      for (const row of rows) console.log(`${row.email}  (created ${new Date(row.created_at).toISOString()})`);
      return;
    }

    if (command === "remove") {
      const removed = await database("admins").where({ email }).delete();
      console.log(removed ? `Removed ${email}.` : `No admin named ${email}.`);
      return;
    }

    const passwordHash = hashPassword(await readPassword());
    const existing = await database("admins").where({ email }).first();
    if (existing) {
      await database("admins").where({ id: existing.id }).update({ password_hash: passwordHash });
      console.log(`Password updated for ${email}.`);
    } else {
      await database("admins").insert({ email, password_hash: passwordHash });
      console.log(`Created admin ${email}.`);
    }
  } finally {
    await database.destroy();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

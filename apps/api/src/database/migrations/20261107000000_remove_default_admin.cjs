const { scryptSync, timingSafeEqual } = require("node:crypto");

// Earlier builds created admin@bil.local with a password published in the
// repository. Delete that account wherever it still has that password, so a
// deployed site never keeps a login anyone can read in the source.
const DEFAULT_EMAIL = "admin@bil.local";
const DEFAULT_PASSWORD = "bil-admin";

function matches(password, stored) {
  const [salt, hash] = String(stored).split(".");
  if (!salt || !hash) return false;
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "base64url");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  const row = await knex("admins").where({ email: DEFAULT_EMAIL }).first();
  if (row && matches(DEFAULT_PASSWORD, row.password_hash)) {
    await knex("admins").where({ id: row.id }).delete();
  }
};

exports.down = async function down() {};

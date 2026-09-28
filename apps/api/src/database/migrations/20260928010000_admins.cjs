/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  if (await knex.schema.hasTable("admins")) return;

  await knex.schema.createTable("admins", (table) => {
    table.bigIncrements("id").primary();
    table.string("email", 320).notNullable().unique();
    table.string("password_hash", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param {import("knex").Knex} knex
 */
exports.down = async function down(knex) {
  await knex.schema.dropTableIfExists("admins");
};

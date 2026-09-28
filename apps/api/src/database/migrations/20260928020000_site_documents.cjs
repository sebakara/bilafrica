/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  if (await knex.schema.hasTable("site_documents")) return;

  await knex.schema.createTable("site_documents", (table) => {
    table.string("key", 64).primary();
    table.json("body").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param {import("knex").Knex} knex
 */
exports.down = async function down(knex) {
  await knex.schema.dropTableIfExists("site_documents");
};

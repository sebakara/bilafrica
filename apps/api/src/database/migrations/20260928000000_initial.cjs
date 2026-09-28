/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  if (!(await knex.schema.hasTable("insights"))) {
    await knex.schema.createTable("insights", (table) => {
      table.string("id", 64).primary();
      table.string("slug", 160).notNullable().unique();
      table.string("title", 255).notNullable();
      table.string("subtitle", 255).nullable();
      table.text("summary").notNullable();
      table.string("kind", 40).notNullable();
      table.string("category", 80).notNullable();
      table.json("topics").notNullable();
      table.date("publication_date").notNullable();
      table.string("reading_time", 40).notNullable();
      table.boolean("featured").notNullable();
      table.boolean("sample").notNullable();
      table.json("authors").notNullable();
      table.json("content").notNullable();
    });
  }

  if (!(await knex.schema.hasTable("contact_messages"))) {
    await knex.schema.createTable("contact_messages", (table) => {
      table.bigIncrements("id").primary();
      table.string("full_name", 200).notNullable();
      table.string("organisation", 200).notNullable();
      table.string("email", 320).notNullable();
      table.string("phone", 40).nullable();
      table.string("country", 80).nullable();
      table.string("interest", 80).notNullable();
      table.text("message").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  }

  if (!(await knex.schema.hasTable("newsletter_subscribers"))) {
    await knex.schema.createTable("newsletter_subscribers", (table) => {
      table.bigIncrements("id").primary();
      table.string("email", 320).notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  }
};

/**
 * @param {import("knex").Knex} knex
 */
exports.down = async function down(knex) {
  await knex.schema.dropTableIfExists("newsletter_subscribers");
  await knex.schema.dropTableIfExists("contact_messages");
  await knex.schema.dropTableIfExists("insights");
};

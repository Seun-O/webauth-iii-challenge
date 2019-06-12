exports.up = async knex => {
  await knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl
      .string("username")
      .unique()
      .notNullable();
    tbl.string("password").notNullable();
    tbl.string("department").notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTable("users");
};

//responsavel pela criacao da tabela
exports.up = function (knex) {
  return knex.schema.createTable("ongs", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whats").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

//executa se caso o up der errado
exports.down = function (knex) {
   return knex.schema.dropTable("ongs");
};

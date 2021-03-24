const { text } = require("express");

exports.up = function(knex) {
  return knex.schema
  .createTable('products', tbl => {
      tbl.increments();
      tbl.string('title').unique().notNullable();
      tbl.integer('price');
      tbl.string('description');
      tbl.string('category');
      tbl.string('image');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('products');
};

const db = require('../database/dbConfig')

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("products");
}

function findBy(filter) {
    return db("products")
    .where(filter).first();
}

function findById(id) {
    return db("products")
    .where({id}).first();
}

function add(product) {
    return db("products")
    .insert(product, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("products")
    .where({id})
    .update(changes, '*')
}

function remove(id) {
    return db("products")
    .where({id}).del()
}
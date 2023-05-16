
const mongoose = require('mongoose');

const db = {};

const url = "mongodb://0.0.0.0:27017/mydb";


db.url = url;
db.mongoose = mongoose;

module.exports = db;
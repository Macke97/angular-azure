const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  year: String
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;
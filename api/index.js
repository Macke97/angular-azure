const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('../models/book');

router.get('/message', (req, res, next) => {
  res.json({
    YourSessionId: req.session.id
  });
});

//get all from db
router.get('/books', async (req, res, next) => {
  let allBooks = await Book.find();
  res.json(allBooks);
});

//post a new book
router.post('/books', (req, res, next) => {
  let newBook = {
    author: req.body.author,
    title: req.body.title,
    year: req.body.year
  }

  //Create new book
  Book.create(newBook, (error, book) => {
    if(error) {
      return console.log(error);
    }
    return res.json(newBook);
  });
});

module.exports = router;
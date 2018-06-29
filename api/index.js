const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('../models/book');

//IGDB stuff
const igdb = require('igdb-api-node').default;
const client = igdb('7c44d61f3d706061f03d7de294d30dbb');

router.get('/message', (req, res, next) => {
  Object.keys(req.query).length > 0 ? res.json(req.query) : res.send('No query');
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
    return res.json(book);
  });
});

//Remove book
router.delete('/books/remove/:id', (req, res, next) => {
  Book.findOne({_id: req.params.id}, (err, book) => {
    if(err) {
      console.log(err);
      let customError = {message: `Could not find book with id ${req.params.id}`}; //Error to the user. Simplified
      return res.json(customError);
    } 
    //Remove book if found!
    if(book){
      Book.deleteOne({_id: book._id}, (err, resp) => {
        if(err) {
          console.log(err);
          return res.json(err);
        }
        res.json(book);
      });
    } else {
      console.error(`Could not find book with id ${req.params.id}`);
      let customError = { message: `Could not find book with id ${req.params.id}` };
      return res.json(customError);
    }
  });  
});

//Get games
router.get('/games', (req, res, next) => {
  client.games({
    limit: 5,
    offset: 0,
    order: 'release_dates.date:desc',
    search: 'battlefield'
  }, [
    'name',
    'release_dates.date',
    'rating',
    'hypes',
    'cover',
    'summary'
  ]).then(response => res.json(response));
});

module.exports = router;
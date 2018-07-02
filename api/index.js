const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('../models/book');
const User = require('../models/User');

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


//Update book
router.put('/books/update/:id', (req, res, next) => {
  Book.updateOne({_id: req.params.id}, {
    $set: {
      title: req.body.title,
      author: req.body.author,
      year: req.body.year
    }
  }, (err, data) => {
    if(err) {
      res.send(err);
    }
  })
});



//Register user, post request
router.post('/register', (req, res, next) => {
  if(req.body.firstname && req.body.username && req.body.password) {
    let newUser = {
      firstname: req.body.firstname,
      username: req.body.username,
      password: req.body.password
    }

    User.create(newUser, (error, user) => {
      if(error) return next(error);

      req.session.userId = user._id;
      res.json(user)
    });

  } else {
    res.status = 500;
    res.send('Error!');
  }
});

//Login post request
router.post('/login', (req, res, next) => {
  if(req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, (error, user) => {
      if(error || !user) {
        let err = new Error('Wrong inputs');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        res.json({
          message: 'Logged in!',
          user: user
        })
      }
    });
  } else {
    res.send('Please input data to login!').status(401);
  }
});


//Check if logged in
router.get('/login', (req, res, next) => {
  if(req.session.userId) {
    res.json({
      loggedIn: true
    });
  } else {
    res.json({
      loggedIn: false
    })
  }
});


//Get profile data, GET request
router.get('/get_profile_data', (req, res, next) => {
  if(req.session.userId) {
    User.findOne({
      _id: req.session.userId
    }, (err, data) => {
      if(err) console.log(err);
      res.json({
        message: 'You are logged in',
        data: data
      });
    });
  } else {
    res.send('Not logged in!');
  }
});

module.exports = router;
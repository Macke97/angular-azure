const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = new Schema({
  firstname: {type:String, required:true, trim:true},
  username: {type:String, required: true, trim:true, lowercase: true, unique: true},
  password: {type:String, required:true},
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

userSchema.statics.authenticate = function(username, password, callback) {
 User.findOne({
   username
 }).exec((error, user) => {
  if(error || !user) {
    return callback(error);
  } else {
    bcrypt.compare(password, user.password, (error, result) => {
      if(result) {
        
        return callback(null, user); // <--- Passwords match
      } else {
        console.log('Here i am');
        return callback();
      }
    });
  }
 });
}

userSchema.pre('save', function(next) {
  let user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) return next(err);

    user.password = hash;
    next();
  });
});

let User = module.exports = mongoose.model('User', userSchema);
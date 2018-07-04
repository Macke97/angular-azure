const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstname: {type:String, required:true},
  username: {type:String, required: true},
  password: {type:String, required:true},
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

userSchema.statics.authenticate = function(username, password, callback) {
  User.findOne({
    username
  }).exec((error, user) => {
    if(error) {
      return callback(error);
    } else if(!user) {
      let err = new Error('No user found!');
      err.status = 401;
      return callback(err);
    } else {
      if(user.password === password) {
        return callback(null, user);
      } else {
        return callback();
      }
    }
  });
}

let User = module.exports = mongoose.model('User', userSchema);
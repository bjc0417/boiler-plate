const mongoose = require('mongoose');

//Create Schema 
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  }, 
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

// Cover Schema up by Model
const User = mongoose.model('User', userSchema)

// 모델을 다른 곳에서도 사용할 수 있게 해주는 명령어
module.exports = {User}
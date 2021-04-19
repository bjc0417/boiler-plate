const express = require('express')
const app = express()
const port = 5000 // 아무 숫자나 상관없다 (default '3000')

// mongoose를 이용해서 app과 mongo DB를 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jamesbyeon:abcd1234@boilerplate.uvinw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
  // 위의 것들을 작성해줘야 error가 안뜨게 된다.
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
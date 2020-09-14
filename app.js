const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')

let app = express()
// body-parser
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

// data       ----fs
// let database = require('./data/db.json')
// template-plugins
app.engine('html', require('express-art-template'))
// app-use
app.use('/public', express.static('./public/'))
// router-app
app.use(router)

app.listen(5432, () => {
  console.log('listening at: http://127.0.0.1:5432')
})

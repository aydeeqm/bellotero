const express = require('express')
const app = express()
const menuData = require('./db/menu.json')
const pageOneData = require('./db/pageOne.json')
const pageTwoData = require('./db/pageTwo.json')

// Setting
app.set('port', process.env.PORT || 5000)

app.use(express.urlencoded({ extended: false }))

// API
app.get('/', (req, res) => {
  res.send('Welcome to a basic express App')
})

app.get('/menu', (req, res) => {
  res.json(menuData)
})

app.get('/page/1', (req, res) => {
  res.json(pageOneData)
})

app.get('/page/2', (req, res) => {
  res.json(pageTwoData)
})

// Listen on port 5000
app.listen(app.get('port'), () => {
  console.log(`Server listen at ${app.get('port')}`)
})

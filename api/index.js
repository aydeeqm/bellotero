const express = require('express')
const app = express()
const menuData = require('./db/menu.json')

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

// Listen on port 5000
app.listen(app.get('port'), () => {
  console.log(`Server listen at ${app.get('port')}`)
})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/badminton', (req, res) => {
  res.send(`Let's get fit!!`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
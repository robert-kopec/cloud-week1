//first NodeJS application
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Virtual Machine!')
})

app.get('/servicea', (req, res) => {
    res.send('Get service A!')
})

app.get('/serviceb', (req, res) => {
    res.send('Get service B!')
})

app.post('/', (req, res) => {
    res.send('Get a post request!')
})

app.put('/', (req, res) => {
    res.send('Get a put request!')
})

app.delete('/', (req, res) => {
    res.send('Get a delete request!')
})

app.listen(port, () => {
    console.log(`Express Application listening at port 3000`)
})
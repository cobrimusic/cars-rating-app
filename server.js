const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('*', async(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(3001, async() => {
    console.log('Corriendo en puerto 3001')
})
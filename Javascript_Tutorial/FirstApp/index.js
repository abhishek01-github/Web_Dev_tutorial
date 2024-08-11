const express = require('express');
const mongoose = require('mongoose')
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/newDB')
    .then(() => {
        console.log("Database Connected!!!")
    })
    .catch(err => {
        console.log("Some error occured")
        console.warn(err)
    })

app.get('/cats', (req, res) => {
    res.send("This is a cat request")
})

app.get('/dogs', (req, res) => {
    res.send("This is a dog request")
})

app.get('/r/:anything', (req, res) => {
    const {anything} = req.params;
    res.send(`<h1>This is by default request's response for ${anything} </h1>`)
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q) {
        res.send("Nothing found")
    }
    res.send(`Search query for : ${q}`)
})

app.get('*', (req, res) => {
    res.send("This is by default response")
})

app.listen(4000, () => {
    console.log("Listening on port 4000")
})
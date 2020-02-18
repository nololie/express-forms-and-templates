'use strict';

const express = require('express');
const app = express();
const port = 1221;
const path = require('path');

app.use(express.static('.'));

app.get('/new_visit', function(req, res) {
    // ros.send(`__dirname = '${__dirname}'`)
    res.sendFile(path.join(__dirname + '/../index.html'), (err) => {
        if (!err) {
            console.log("FILE SENT")
        } else {
            throw (err)
        }
    })
})

app.post('/addnew_visit', function(req, res) {
    res.send(req, (err) => {
        if (!err) {
            console.log("form submited")
        } else {
            throw (err)
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
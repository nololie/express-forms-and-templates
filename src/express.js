'use strict';

const express = require('express');
const { Client } = require("pg");
const path = require('path');
require('dotenv').config()

const app = express();
const port = 1221;

const client = new Client();

client.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));


app.get('/new_visit', function(req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'), (err) => {

        if (err) {
            console.log("file not found")
            throw (err);
        }

    });
});


app.post('/addnew_visit', function(req, res) {

    addNewVisitor(req.body.visitorName, req.body.assistentName, req.body.age, req.body.date, req.body.time, req.body.comments)
    res.send(`Thanks for the info! The following was saved to the database:\n
    Visitor name: ${req.body.visitorName}\n
    Assistant name: ${req.body.assistentName}\n
    Visitor age: ${req.body.age}\n
    Visit date: ${req.body.date}\n
    Visit time: ${req.body.time}\n
    Comments: ${req.body.comments}
    `)
});


const addNewVisitor = async(name, assistant_name, age, visit_date, visit_time, comments) => {
    try {
        let result = await client.query(

            `INSERT INTO visitors(
                visitorName, 
                asssistantName, 
                visitorAge, 
                visitDate, 
                visitTime, 
                comments)
                VALUES($1, $2, $3, $4, $5, $6)
                RETURNING *;`,

            [name, assistant_name, age, visit_date, visit_time, comments]

        );

        return result.rows;

    } catch (e) {
        console.log(e);
        throw e;
    }
};


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
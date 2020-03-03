'use strict';

const express = require('express'); // Find out more about "Express methods" and how they work.
const path = require('path'); // Find out more about "path methods" and how they work.
require('dotenv').config();

const app = express();
const port = 1221;

const { Client } = require("pg"); // Find out more about "pg methods" and how they work.
const client = new Client();
client.connect();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views/')) // Find out more about "app.set" and how it works.

app.use(express.urlencoded({ extended: true }));
app.use(express.static('.')); // Find out more about "app.use" and how it works.

app.get('/new_visit', function(req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'), (err) => {

        if (err) {
            console.log("file not found")
            throw (err);
        }

    });
}); // Find out more about "app.get" and how it works.

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

app.post('/addnew_visit', async(req, res) => {

    let record = await addNewVisitor(req.body.visitorName, req.body.assistentName, req.body.age, req.body.date, req.body.time, req.body.comments)
    res.render('Express.pug', {
        VisitorID: record[0].visitorid,
        visitorName: record[0].visitorname,
        asistentName: record[0].asssistantname,
        visitorAge: record[0].visitorage,
        visitDate: record[0].visitdate,
        visitTime: record[0].visittime,
        comments: record[0].comments
    });

}); // Find out more about "app.post" and how it works.

let server = app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // Find out more about "app.listen" and how it works.

module.exports = server;
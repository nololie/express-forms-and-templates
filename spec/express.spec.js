const fixture = require('./fixture');
const axios = require('axios'); // Find out more about axios and how it can be used.
const readline = require('readline'); // Find out more about readline and how it can be used.

let server;

beforeEach(() => {
    server = require('../src/express')
});

afterEach(() => {
    server.close()
})

describe('express new_visit endpoint', () => {

    it('should return an html form', async(done) => {
        try {
            const html = await axios.get("http://localhost:1221/new_visit")
            expect(html.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }

        done()
    })
})

describe('express addnew_visit endpoint', () => {

    it('should submit and save the form data to a database', async(done) => {
        try {

        } catch (err) {
            console.log(err)
        }

        done()
    })
})
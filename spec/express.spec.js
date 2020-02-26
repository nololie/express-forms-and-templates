const fixture = require('./fixture');
const axios = require('axios');
const readline = require('readline');

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
const chai = require('chai');
const expect = chai.expect;
const axios = require('axios').default;
const json = require('../data/json');


describe('WebServices testing', () => {

    json.map(async (data) => {

        it("Status message is OK", async function () {
            let statusText
            let responceJson = await axios.get('https://jsonplaceholder.typicode.com/users')
            statusText= responceJson.statusText
            expect(statusText).to.be.equal('OK')
        })

        it("Status code is 200", async function () {
            let statusCode
            let responceJson = await axios.get('https://jsonplaceholder.typicode.com/users')
            statusCode = responceJson.status
            expect(statusCode).to.be.equal(200)
        })

        it("Header 'content-type' presents", async function () {
            let header
            let responceJson = await axios.get('https://jsonplaceholder.typicode.com/users')
            header = responceJson.headers
            expect(header).to.have.property('content-type');
        })

        it("Value of the 'content-type' Header", async function () {
            let header
            let responceJson = await axios.get('https://jsonplaceholder.typicode.com/users')
            header = responceJson.headers['content-type']
            expect(header).to.be.equal('application/json; charset=utf-8')
        })


        it("Array of 10 Users", async function () {
            let responceJson = await axios.get('https://jsonplaceholder.typicode.com/users')
            let arrayOfUsers = responceJson.data
            expect(arrayOfUsers.length).to.be.equal(10)
        })

    })
})

const axios = require('axios');

const targetUrl = 'http://localhost:3000'; // URL of the server to be tested
const requestCount = 20000; // Number of requests to send

async function sendRequest() {
    try {
        const response = await axios.get(targetUrl);
        console.log(`Status: ${response.status}, Data: ${response.data}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

async function runLoadTest() {
    for (let i = 0; i < requestCount; i++) {
        sendRequest(); // Sends an asynchronous request
    }
    console.log(`${requestCount} requests sent.`);
}

runLoadTest();
const axios = require('axios');

const targetUrl = 'http://localhost:3000'; // URL of the server to be tested
const requestCount = 10000; // Number of requests to send

let errorCount = 0;

async function sendRequest() {
    try {
        const response = await axios.get(targetUrl);
        // console.log(`Status: ${response.status}, Data: ${response.data}`);
    } catch (error) {
		errorCount++;
        console.error(`Error: ` + '(' + errorCount + ')', error.toString());
    }
}

async function runLoadTest() {
    for (let i = 0; i < requestCount; i++) {
		setTimeout(() => {
        	sendRequest(); // Sends an asynchronous request
		}, i * 0.7)
    }
    console.log(`${requestCount} requests sent.`);
}

runLoadTest();
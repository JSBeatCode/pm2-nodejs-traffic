const express = require('express');
const calmem = require('./calmem.js')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const now = new Date();
    const curDate = now.toLocaleTimeString() + '.' + now.getMilliseconds()
    console.log(curDate)
    res.send('Hello, World! 22222222222! ' + curDate);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
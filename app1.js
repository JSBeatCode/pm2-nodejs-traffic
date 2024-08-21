const express = require('express');
const calmem = require('./calmem.js')
const app = express();
const port = 3000;

// '/' 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
    const now = new Date();
    const curDate = now.toLocaleTimeString() + '.' + now.getMilliseconds()
    console.log(curDate)
    res.send('Hello, World! 11111111111! ' + curDate);
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const calmem = require('./calmem.js')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const now = new Date();
    const curDate = now.toLocaleTimeString() + '.' + now.getMilliseconds()
    const memWrite = calmem.printMemoryUsage();
    console.log(curDate);
	console.log('  ' + memWrite.metricsMemoryUsage);
    console.log('  ' + memWrite.metricsTotalMemory);
    console.log('  ' + memWrite.metricsUsedMemory);
    console.log('  ' + memWrite.metricsFreeMemory);
	console.log('  ' + memWrite.metricsAppMemoryUsage);
    res.send('Hello, World! 11111111111! ' + curDate);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
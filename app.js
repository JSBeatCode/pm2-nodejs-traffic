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

    const startMeasure = calmem.getCpuTimes();

    setTimeout(() => {
        const endMeasure = calmem.getCpuTimes();
        const cpuUsage = calmem.calculateCpuUsage(startMeasure, endMeasure);

        console.log(`  CPU Usage: ${cpuUsage}%`);

        res.send('Hello, World! ' + curDate);
    }, 1000);
    // res.send('Hello, World! ' + curDate);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
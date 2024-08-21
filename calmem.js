const os = require('os');

// Function to calculate CPU usage
function calculateCpuUsage(start, end) {
  const idleDifference = end.idle - start.idle;
  const totalDifference = end.total - start.total;

  const cpuPercent = (1 - idleDifference / totalDifference) * 100;
  return cpuPercent.toFixed(2);
}

// Function to get current CPU times
function getCpuTimes() {
  const cpus = os.cpus();
  let user = 0, nice = 0, sys = 0, idle = 0, irq = 0;

  cpus.forEach((cpu) => {
    user += cpu.times.user;
    nice += cpu.times.nice;
    sys += cpu.times.sys;
    idle += cpu.times.idle;
    irq += cpu.times.irq;
  });

  return {
    idle: idle,
    total: user + nice + sys + idle + irq
  };
}

// Function to measure and print CPU usage
function printCpuUsage() {
  const startMeasure = getCpuTimes();

  setTimeout(() => {
    const endMeasure = getCpuTimes();
    const cpuUsage = calculateCpuUsage(startMeasure, endMeasure);

    console.log(`CPU Usage: ${cpuUsage}%`);
  }, 1000);
  
}

// Function to calculate and print memory usage
function printMemoryUsage() {
  const memoryUsage = process.memoryUsage(); // Get the current memory usage of the app process
  const totalMemory = os.totalmem(); // Total system memory
  const freeMemory = os.freemem(); // Free system memory

  const usedMemory = totalMemory - freeMemory; // Memory in use
  const memoryUsagePercent = (usedMemory / totalMemory) * 100;
  
  const otherMemory = memoryUsage.rss - memoryUsage.heapTotal - memoryUsage.external; // Calculates the remaining memory
  // console.log(`Memory Usage: ${memoryUsagePercent.toFixed(2)}%`);
  // console.log(`Total Memory: ${(totalMemory / (1024 * 1024)).toFixed(2)} MB`);
  // console.log(`  Used Memory: ${(usedMemory / (1024 * 1024)).toFixed(2)} MB`);
  // console.log(`  Free Memory: ${(freeMemory / (1024 * 1024)).toFixed(2)} MB`);
  // console.log('-------------------------------------------------')
  // console.log(`App Memory Usage: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`);
  // console.log(`Heap Total: ${(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2)} MB`);
  // console.log(`  Heap Used: ${(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2)} MB`);
  // console.log(`  Heap Used: ${(memoryUsage.heapUsed / memoryUsage.heapTotal).toFixed(2)} %`);
  // console.log(`External: ${(memoryUsage.external / (1024 * 1024)).toFixed(2)} MB`);
  // console.log(`Other Memory (RSS - External): ${(otherMemory / (1024 * 1024)).toFixed(2)} MB`);
  // console.log('-------------------------------------------------');
  
  const metricsMemoryUsage = `Memory Usage: ${memoryUsagePercent.toFixed(2)}%`;
  const metricsTotalMemory = `Total Memory: ${(totalMemory / (1024 * 1024)).toFixed(2)} MB`;
  const metricsUsedMemory = `Used Memory: ${(usedMemory / (1024 * 1024)).toFixed(2)} MB`;
  const metricsFreeMemory = `Free Memory: ${(freeMemory / (1024 * 1024)).toFixed(2)} MB`;
  const metricsAppMemoryUsage = `App Memory Usage: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`;
  const metricsHeapTotal = `Heap Total: ${(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2)} MB`;
  const metricsHeapUsed = `Heap Used: ${(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2)} MB`;
  const metricsHeapUsedPercentage = `Heap Used: ${(memoryUsage.heapUsed / memoryUsage.heapTotal).toFixed(2)} %`;
  const metricsExternal = `External: ${(memoryUsage.external / (1024 * 1024)).toFixed(2)} MB`;
  const metricsOtherMemory = `Other Memory (RSS - External): ${(otherMemory / (1024 * 1024)).toFixed(2)} MB`;

  return {
    metricsMemoryUsage,
    metricsTotalMemory,
    metricsUsedMemory,
    metricsFreeMemory,
    metricsAppMemoryUsage,
    metricsHeapTotal,
    metricsHeapUsed,
    metricsHeapUsedPercentage,
    metricsExternal,
    metricsOtherMemory
  }
}

// Call functions to print CPU and memory usage
// printCpuUsage();
// printMemoryUsage();

module.exports = {
  printMemoryUsage
  , printCpuUsage
}
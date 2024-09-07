module.exports = {
  apps: [
    {
      name: "app-1", // Name of the application
      script: "./app1.js", // Entry point for the application
      instances: 1, // Number of instances to start
      exec_mode: "cluster", // Mode of execution (cluster for multiple processes)
      watch: true, // Watch files for changes and restart on changes
      env: {
        PORT: 3000, // Port to listen on
      },
    },
    {
      name: "app-2",
      script: "./app2.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
      env: {
        PORT: 3000,
      },
    },
    {
      name: "app-3",
      script: "./app3.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
      env: {
        PORT: 3000,
      },
    },
{
      name: "app-4",
      script: "./app4.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
      env: {
        PORT: 3000,
      },
    },
{
      name: "app-5",
      script: "./app5.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
      env: {
        PORT: 3000,
      },
    },
{
      name: "app-6",
      script: "./app6.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
      env: {
        PORT: 3000,
      },
    },
  ],
};
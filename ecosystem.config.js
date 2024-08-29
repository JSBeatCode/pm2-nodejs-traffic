module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      instances: 0, // Set instances to 0 for maximum utilization
      exec_mode: "cluster",
      watch: false,
      env: {
        PORT: 3000
      }
    }
  ]
};
module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      instances: 0,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000
    }
  ]
}
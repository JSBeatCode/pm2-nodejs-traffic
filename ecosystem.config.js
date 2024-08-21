module.exports = {
    apps: [
      {
        name: "app-1",
        script: "./app1.js",  // 실행할 파일 이름
        instances: 1,
        exec_mode: "cluster",  // 단일 프로세스로 실행
        watch: true,
        env: {
          PORT: 3000,
        },
      },
      {
        name: "app-2",
        script: "./app2.js",  // 실행할 파일 이름
        instances: 1,
        exec_mode: "cluster",
        watch: true,
        env: {
          PORT: 3000,
        },
      },
      {
        name: "app-3",
        script: "./app3.js",  // 실행할 파일 이름
        instances: 1,
        exec_mode: "cluster",
        watch: true,
        env: {
          PORT: 3000,
        },
      },
    ],
  };
  
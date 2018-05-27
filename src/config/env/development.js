export default {
  debug: "true",
  siteName: "fuberDev",
  server: "http://192.168.1.21",
  port: 8080,
  bodyLimit: "10000kb",
  corsHeaders: ["Link"],
  dbconfig: {
    user: "",
    password: "",
    server: "127.0.0.1",
    database: "test",
    port: 27017,
    pool: {
      max: 15,
      min: 5,
      idleTimeoutMillis: 30000
    },
    debug: true,
    // options: { encrypt: true }
  }
};

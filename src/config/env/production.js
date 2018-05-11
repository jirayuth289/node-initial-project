export default {
  siteName: "บริษัท คำเขื่อนแก้วธุรกิจ จำกัด",
  server: process.env.SERVER || "https://api.yasothonpico.com",
  port: process.env.PORT || 8080,
  bodyLimit: "10000kb",
  corsHeaders: ["Link"],
  dbconfig: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER || "localhost",
    database: process.env.DB_NAME,
    pool: {
      max: 15,
      min: 5,
      idleTimeoutMillis: 30000
    },
    options: { encrypt: true }
  },
  smtpconfig: {
    auth: {
      user: process.env.USER_EMAIL || "noreply@yasothonpico.com",
      pass: process.env.PASS_EMAIL
    },
    host: process.env.HOST_EMAIL || "mail.yasothonpico.com",
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  }
};

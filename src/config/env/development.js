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
  },
  smtpconfig: {
    auth: {
      type: "OAuth2",
      user: "jsubu2933@gmail.com",
      clientId: "474404996888-3l14mb5vmuqcnspivp29ul7a62vr4cgb.apps.googleusercontent.com",
      clientSecret: "1OptrlKSfjqw1vCCNA0w1R_E",
      refreshToken: "1/LzrQ8mKZuT-WlyZWKPogvZKSL8LVwBnQXJtkoZ0SwuXA5nlJ5D7MwwBq9J5xp4qy",
      accessToken:
        "ya29.GltlBUccWbcTFGBpRBSE1VConwuwUC-GzFcn8tnWbdG3EXIsfp5X83z_uPeJMNFi3rcWMV00Jznr7_cm763301pxSpuajqQaI099TM3iikl28pBMkIMgBXrOMNAE"
    },
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  }
};

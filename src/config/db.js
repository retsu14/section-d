const serverlessMysql = require("serverless-mysql");

const db = serverlessMysql({
  config: {
    host: "localhost",
    database: "sectiond",
    user: "root",
    password: "",
    port: 3306,
  },
});

module.exports = db;

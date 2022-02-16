const mysql = require("mysql2");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "Bookstore",
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Connect to Database Bookstore successfully");
});

module.exports = dbConn;
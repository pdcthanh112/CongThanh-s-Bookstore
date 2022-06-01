const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookstore', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const dbConn = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = dbConn;

// const mysql = require("mysql2");

// const dbConn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "Bookstore",
// });

// dbConn.connect((err) => {
//   if (err) throw err;
//   console.log("Connect to Database 'Bookstore' successfully");
// });

// module.exports = dbConn;
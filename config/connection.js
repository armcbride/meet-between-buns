const mysql = require("mysql2");

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
    database: "burger_db"
});

connection.connect(function(err) {
    if (err){
        console.error("error connecting: " + err.stack);
        return; 
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;
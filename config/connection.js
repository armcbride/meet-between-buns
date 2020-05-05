const mysql2 = require("mysql2");

require('dotenv').config();

const connection = mysql2.createConnection(process.env.JAWSDB_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
});

connection.connect(function(err) {
    if (err){
        console.error("error connecting: " + err.stack);
        return; 
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;
const express = require("express");

const PORT = process.env.port || 8080;

const app = express();





app.listen(PORT, function(){
    console.log(`Server listening on: http://localhost:${PORT}`)
})
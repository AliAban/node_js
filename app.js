const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;


// express 
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// pug stuff

app.set("view engine", "pug") //setting view engine
app.set("views", path.join(__dirname, 'views')); //setting the directory of the pug templates


// Endpoints
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render("index.pug", params);
})

//start the server

app.listen(port, ()=>{
    console.log("The server has started on port 3000");
})
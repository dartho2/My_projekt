const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const app = express();
const YogaRoutes = require("./routes/yoga")
const db = "mongodb://darth:pawel1988@ds217002.mlab.com:17002/angulardb"
const Yoga = require('./models/yoga')

mongoose.connect(db, err => {
    if (err) {
        console.error("Someone Error!" + err )
    } else {
        console.log("DB connected")
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});


app.use("/api/yoga", YogaRoutes);
module.exports = app;
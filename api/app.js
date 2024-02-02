const express = require('express');
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Service is running on port 3001")
});

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb:/localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    })

module.exports = app;
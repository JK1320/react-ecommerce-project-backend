const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // to use env import dotenv

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("this is only a test")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
})
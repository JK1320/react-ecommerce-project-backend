const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("this is only a test")
})

app.listen(5000, (req, res)=> {
    console.log("Server is running");
})
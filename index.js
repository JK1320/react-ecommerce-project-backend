const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // to use env import dotenv
const userRoute = require("./routes/user");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {
    console.log(err);
})

app.use(express.json()); // to post json file from frontend need this 
app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
})
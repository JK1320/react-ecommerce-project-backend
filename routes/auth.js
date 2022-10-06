const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async(req, res) => {
// if(!req.body){
//     res.status(400).json("please fill in all the details");
// };

const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
});


try {
    const savedUser = await newUser.save();     // save() will save data in mongoose database
    res.status(201).json(savedUser);
} catch (error) {
    res.status(500).json(error);
};

 });

module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");


// REGISTER
router.post("/register", async(req, res) => {
// if(!req.body){
//     res.status(400).json("please fill in all the details");
// };

const newUser = new User({
  username: req.body.username,
  email: req.body.email,
  password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
});


try {
    const savedUser = await newUser.save();     // save() will save data in mongoose database
    res.status(201).json(savedUser);
} catch (error) {
    res.status(500).json(error);
};

 });


 // LOGIN

 router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if(!user){
         return res.status(401).json("Wrong credentials!");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );

        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(OriginalPassword !== req.body.password){
          return res.status(401).json("Wrong credentials!");
    }
          const {password, ...others} = user._doc;


          res.status(200).json(others);

    } catch (error) {
        res.status(500).json(error);
    }
     
 })

module.exports = router;

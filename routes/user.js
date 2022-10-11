const CryptoJS = require("crypto-js");
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();


// Update route
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
   if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
        req.body.password, 
        process.env.PASS_SEC
    ).toString()
   };

   try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});
    
    res.status(200).json(updatedUser);
   } catch (error) {
        res.status(500).json(error);
   }
});

//Delete route
router.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
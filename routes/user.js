const CryptoJS = require("crypto-js");
const User = require("../models/User");
const { verifyToken, verifyTokenAuthorization } = require("./verifyToken");
const router = require("express").Router();


// Update
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
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

module.exports = router;
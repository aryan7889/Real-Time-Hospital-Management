const express = require("express")
const jwt = require("jsonwebtoken");
const {authmiddleware,JWT_SECRET}=require("../middlewares/authmiddleware");
const router = express.Router();

import{getUser} from"../controllers/getuser";
import{loginUser} from"../controllers/login"
import{siginUser} from"../controllers/signin"
export function createToken(user){
    return jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET,
        { expiresIn: "7d" }
    );
}

router.post("/register",siginUser);
router.post("/login",loginUser);
router.get("/me",authmiddleware,getUser);

module.exports = router;

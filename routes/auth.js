const express = require("express")
const jwt = require("jsonwebtoken");
const {authmiddleware,JWT_SECRET}=require("../middlewares/authmiddleware");
const router = express.Router();

const{getUser} = require("../controllers/getuser");
const{loginUser} = require("../controllers/login")
const{siginUser} = require("../controllers/signin")


router.post("/register",siginUser);
router.post("/login",loginUser);
router.get("/me",authmiddleware,getUser);

module.exports = router;

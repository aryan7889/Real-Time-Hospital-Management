const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "hiaaa";

function createToken(user){
    return jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET,
        { expiresIn: "7d" }
    );
}

module.exports={
    createToken,
}

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const {createToken} = require("../utils/token");


async function siginUser(req,res){
    try {
        const { username, email, password ,role} = req.body;

        if (!username || !email || !password || !role) {
            return res.status(400).json({ error: "Username, email, and password role are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters" });
        }

        const existingUser = await User.findOne({
            $or: [{ email: email.toLowerCase() }, { username }],
        });

        if (existingUser) {
            return res.status(409).json({ error: "Username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: hashedPassword,
            role,
        });

        const token = createToken(user);

        res.status(201).json({
            token,
            user: { id: user._id, username: user.username, email: user.email , role: user.role },
        });
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
}

module.exports={
    siginUser,
}
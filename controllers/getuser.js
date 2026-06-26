
const User = require("../models/user");


async function getUser(req,res){
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            user: { id: user._id, username: user.username, email: user.email },
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
}
module.exports={
    getUser,
}
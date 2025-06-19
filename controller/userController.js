const userSchema = require('../model/userSchema')

//Create
exports.createUser = async (req, res) => {
    await userSchema.create(req.body);
    res.status(201).json({ success: true, message: "Data inserted successfully" })
}

//User login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ success: false, message: "Username or Password missing" })
    }
    else {
        const user = await userSchema.findOne({ username }).select("+password");
        if (!user) {
            res.status(401).json({ success: false, message: "User not found" })
        }
        else {
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                res.status(401).json({ success: false, message: "Password Mismatched" })
            }
            else{
                let token=await user.generateToken()
                res.status(200).json({ success: true, message: "Login successful", token})
            }
        }
    }
}
const Users = require("../model/Users");

async function Signup(req, res) {
    const body = req.body;
    console.log("Received signup request with body:", body);
    if (!body.name || !body.email || !body.password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    if (body.password !== body.reEnterPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }
    try {
        const response = await Users.create({
            name: body.name,
            email: body.email,
            password: body.password,
            reEnterPassword: body.reEnterPassword
        });
        console.log("User created successfully:", response);
        return res.status(201).json({ message: "User registered successfully", user: response });

    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists" });
        }
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
async function Login(req, res) {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email are required" });
    }
    try {
        const user = await Users.find({ email});
        if (!user || user.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        console.log("User found:", user);
        return res.status(200).json({ message: "Login successful", user: user[0] });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    Signup,
    Login
};

import Admin from "../models/admin.model.js";

// Admin Login
export const AdminLogin = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Check if passwords match (plain text)
        else if (password !== admin.password) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        return res.status(200).json({ success: true, message: "Login successful" });

    } catch (err) {
        // console.error(err);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const addAdmin = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        // Save new admin
        const newAdmin = new Admin({ email, password });
        await newAdmin.save();

        return res.status(201).json({ success: true, message: "New admin account added" });

    } catch (err) {
        // console.error(err);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


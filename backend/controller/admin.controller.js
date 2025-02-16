import Admin from "../models/admin.model";

export const Admin = (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({success: false ,message: "All fields are required"});
    }
    Admin.findOne({email}).then((admin)=>{
        if(!admin){
            return res.status(400).json({success:false, message: "Invalid credentials"});
        }
        if(password !== admin.password){
            return res.status(400).json({success:false, message: "Invalid credentials"});
        }
        res.status(200).json({success: true, message: "Login successful"});
    }).catch((err)=>{
        res.status(500).json({message: "Internal server error"});
    });
}
//add new admin account
export const addAdmin = (req, res) => {
    const { email, password } = req.body;
    const newAdmin = new Admin({ email, password });
    newAdmin.save().then(() => {
        res.status(201).json({ message: "New admin account added" });
    }).catch((err) => {
        res.status(500).json({ message: "Internal server error" });
    });
}
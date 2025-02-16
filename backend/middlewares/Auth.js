
const isAuth = (req, res, next) => {
    // Check if user is authenticated by checking if there is a token in the request headers.
    const {email, password} = req.body;
    if (email && password) {
        return next();
    }
    return res.status(401).json({ success: false, message: "Unauthorized" });
}
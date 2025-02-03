import User from "../models/data.model.js";

// Add Data of User in DB
export const addData = async (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  try {
    await newUser.save();
    res.status(201).json({
        success: true,
        message: "Data added successfully",
    });
  } catch (error) {
    res.status(409).json({ success:false, message: "data not saved" });
  }
};

export const getData = (req, res) => {
    User.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error: " + err));
}

//fetch data of new users
export const sortedByTime =(req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error: " + err));
}
//fetch according to old user
export const sortedByOldUser = (req, res) => {
    User.find().sort({ createdAt: 1 })
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error: " + err));
}

export const getSortedUsersByName = (req, res) =>{
    User.find().sort({ fullname: 1 })
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error: " + err));
}


export const getsortedbyCountry = (req, res) =>{
    User.find().sort({ country: 1 })
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error: " + err));
}


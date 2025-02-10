import Blog from "../models/blog.model.js";
import sharp from "sharp";
import cloudinary from "../utils/cloudinary.js";

// Get all blog posts
export const getData = async (req, res) => {
  try {
    const data = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "There are No Blogs or Server Down!!!" });
  }
};

// Add a new blog
export const addData = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const { title, content } = req.body;

    // Optimize image
    const optimizedImageBuffer = await sharp(req.file.buffer)
      .resize({ width: 800, height: 800, fit: 'inside' })
      .jpeg({ quality: 80 })
      .toBuffer();

    // Upload to Cloudinary
    const cloudResponse = await cloudinary.uploader.upload(`data:image/jpeg;base64,${optimizedImageBuffer.toString('base64')}`, {
      folder: "blogs",
    });

    // Save to database
    const blog = new Blog({
      title,
      content,
      image: cloudResponse.secure_url,
    });

    await blog.save();
    res.status(201).json({ success: true, message: "Data added successfully", blog });
  } catch (error) {
    console.error("Error:", error);
    res.status(409).json({ success: false, message: "Data not saved", error: error.message });
  }
};

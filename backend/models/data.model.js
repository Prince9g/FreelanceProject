import mongoose from 'mongoose';

const { Schema } = mongoose;

const userData = new Schema({
    fullname: String,
    phone: String,
    email: String,
    country: String,
}, {timestamps: true});

const User = mongoose.model('User', userData);

export default User;

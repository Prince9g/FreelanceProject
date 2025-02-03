import mongoose from 'mongoose';

const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected Successfully");
    } catch (error) {
        console.log("error in db connection");
    }
}

export default Connectdb;
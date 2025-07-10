import mongoose from "mongoose";

const url = process.env.MONGODB_URL

const ConnectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log('Mongoose connection done!')
    } catch (error) {
        console.log("Error while connecting mongoDB" ,error)
    }
}

export default ConnectDB


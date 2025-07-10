import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String,
    },
    lastname : {
        type : String,
    },
    username : {
        type : String,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
    }
})

const User =  mongoose.models.User || mongoose.model('User', UserSchema)

export default User
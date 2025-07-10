import mongoose from "mongoose";

const linksSchema = new mongoose.Schema({
    id: {
        type : Number
    },
    title: {
        type : String
    } ,
    url: {
        type : String
    }
})

const dataSchema = mongoose.Schema({
    handle: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    links : [linksSchema]
})

const data = mongoose.models.data || mongoose.model('data', dataSchema);

export default data
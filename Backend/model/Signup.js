import mongoose from "mongoose";

const my = mongoose.Schema({
    name : {
        type:String,
        reuqired: true
    },
    cms : {
        type:Number,
        required: true
    }
})

const Data = mongoose.model("Database",my);
export default Data;
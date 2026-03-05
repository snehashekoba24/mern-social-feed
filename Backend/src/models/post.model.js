const mongoose= require("mongoose");

const postSchema= new mongoose.Schema({
    image:String,
    caption:String,
})


const postModel = mongoose.model("post",postSchema) //post is the name of the collection where data is stored


module.exports= postModel;
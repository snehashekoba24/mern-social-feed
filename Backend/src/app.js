const express=require('express');
const multer = require('multer'); //file ko read karne ke liye
const uploadFile = require('./services/storage.service');
const postModel = require("./models/post.model")
const cors=require("cors")


const app= express();
app.use(cors())
app.use(express.json()); //middleware to make the data readable in the body



const upload = multer({storage: multer.memoryStorage()})




app.post('/create-post' , upload.single("image") ,async(req,res) => {


    const result= await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})




app.get("/posts", async (req,res) => {
    const posts= await postModel.find()

    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})


module.exports=app;
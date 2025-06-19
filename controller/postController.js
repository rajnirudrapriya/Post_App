const postSchema=require('../model/postSchema');

//Create a post
exports.createPost=async(req,res)=>{
    let payload={
        post:req.file.path,
        posted_by:req.body.posted_by,
        description:req.body.description
    }
    await postSchema.create(payload);
    res.status(201).json({success:true, message:"Data inserted successfully", payload})
}

//Read all posts
exports.allPosts=async(req,res)=>{
    let payload=await postSchema.find()
    res.status(200).json({success:true, message:"Data fetched successfully", payload})
}

//Fetch single post
exports.singlePost=async(req,res)=>{
    let payload=await postSchema.findOne({_id:req.params.id})
    res.status(200).json({success:true, message:"Data fetched successfully", payload})
}

//Update a post
exports.updatePost=async(req,res)=>{
    let post=req.file.path
    let data=req.body
    let payload=await postSchema.updateOne(
        {_id:req.params.id},
        {$set:{...data, post}}
    )
    res.status(200).json({success:true, message:"Data updated successfully", payload})
}

//Delete a post
exports.deletePost=async(req,res)=>{
    let payload=await postSchema.deleteOne({_id:req.params.id})
    res.status(200).json({success:true, message:"Data deleted successfully", payload})
}
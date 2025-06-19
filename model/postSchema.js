const {Schema, model}=require('mongoose');

const postSchema=new Schema({
    post:{
        type:String,
        required:true
    },
    posted_by:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=model('postApp',postSchema)
const mogoose=require('mongoose')
const schema=mogoose.Schema



const PostSchema=new schema({
    title:String,
    desc:String
})



module.exports=mogoose.model('POST',PostSchema)

const express=require('express')
const Router=express.Router()
const mongoose=require('mongoose')
const PostSchema=require('../databse/post')
const connection=require('../databse/connection')



Router.get('/', async (req,res)=>{
    res.cookie('cookie',false,{maxAge:1000*24*60*60})
    const post= await PostSchema.find({})
    res.json(post)
})
Router.post('/', async (req,res)=>{
    const post=new PostSchema({
        title:req.body.title,
        desc:req.body.desc
      
    })
    await post.save();
   res.json('data saved')
})



module.exports=Router

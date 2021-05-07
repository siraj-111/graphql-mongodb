const {GraphQLObjectType,GraphQLString,GraphQLList, GraphQLSchema,GraphQLID}=require('graphql')
const Postschema=require('../databse/post')
const post = require('../databse/post')
var _ = require('lodash');





const PostType=new GraphQLObjectType({
   name:'post',
   fields:()=>({
       title:{type:GraphQLString},
       desc:{type:GraphQLString}
   })


});




const Rootquery=new GraphQLObjectType({
    name:'Rootquery',
    fields:{
        posts:{
            type:new GraphQLList(PostType),
            resolve(parent,args){
                const posts=Postschema.find({})
                return posts
            }

        }
        // post:{
        //     type:{
        //         args:{id:{type:GraphQLID}},
        //         resolve(parent,args){
        //             const post=Postschema.find({title:args.id})
        //             return post
        //         }
        //     }
        // }
    }
});
// const PostType=new GraphQLObjectType({      
//     name:'post',
//     fields:()=>({
//         title:{type:GraphQLString},
//         desc:{type:GraphQLString}
//     })
// });


// const Rootquery=new GraphQLObjectType({
//     name:'RootQuery',
//     fields:{
//         posts:{
//             type:new GraphQLList(PostType),
//             resolve(parent,args){
//                 const posts=Postschema.find({})
//                 return posts

//             }

//         }
//     }
// })

module.exports=new GraphQLSchema({
    query:Rootquery
})
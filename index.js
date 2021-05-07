const express=require('express')
const app =express()
const PostSchema=require('./databse/post')
const { graphqlHTTP } = require('express-graphql');
require('dotenv/config')
const port=process.env.PORT || 4000
const schema=require('./graphql/Schema')
const Router=require('./posts/post')
const cors=require('cors')
const cookies=require('cookie-parser')
app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(cookies())
  app.use(express.json())
  app.use(cors())

const timeMiddleware=(req,res,next)=>{
        const date=new Date()
        console.log(date);
        console.log(PostSchema)
        next()
}


app.use('/',Router)
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}))
app.listen(port,()=>{
    console.log(`server listning to port ${port}`);
})

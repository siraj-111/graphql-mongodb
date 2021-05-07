const mongoose=require('mongoose')



const connection=mongoose.connect('mongodb+srv://siraj:pakistan1947@cluster0.sf6xg.mongodb.net/node?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('database connected !!!');
})


module.exports=connection
const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/logindata",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String

})

const logincollection = mongoose.model("logincollection", newSchema)

module.exports=logincollection
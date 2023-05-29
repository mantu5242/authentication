const express = require('express');
const logincollection = require("./mongo");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


// app.get('/',(req,res)=>{
//     res.send("hello")
// })
// /


app.post("/Login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await logincollection.findOne({ email: email });
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfully" });
        } else {
          res.send({ message: "Password is incorrect" });
        }
      } else {
        res.send({ message: "User is not registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });
  


// app.post("/Login", async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const user = await logincollection.findOne({ email: email });
//       if (user) {
//         if(password === user.password){

//             res.send({ message: "Login Successfully",user:user });
//             alert("successfull")
//         }
//         else{
//             res.send({message: "Password or Email is incorrect"})
//         }
//       } else {
        
//         res.send({ message: "User is not Registered" });
//       }
//     } catch (err) {
//       res.send(err);
//     }
//   });

app.post("/Signup", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await logincollection.findOne({ email: email });
      if (user) {
        res.send({ message: "User already exists" });
      } else {
        const newUser = new logincollection({
          name,
          email,
          password
        });
  
        await newUser.save();
        res.send({ message: "Successfully Registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });
  





// app.post("/Signup",(req,res) => {
//     const {name,email,password}=req.body;

//     // findOne fumction of mdb checks that the new user already exist
//     logincollection.findOne({email:email},(err,user) => {
//         if(user){
//             res.send({message:"user alredy exist"})
//         }
//         else{
//             const user =new logincollection({
//                 name,
//                 email,
//                 password
//             })
//         }
//     })
//     user.save(err => {
//         if(err){
//             res.send(err)
//         }
//         else{
//             rew.send({message:"Successfully Registered"})
//         }
//     })
// })


app.listen(8000,()=>{
    console.log("port connected");
})
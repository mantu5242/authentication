import React,{useState} from 'react';
import axios from 'axios'   // to call api
import {Link} from "react-router-dom";
function Signup(){
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handlechange=(e)=>{
        const {name,value}=e.target
        // console.log(name,value)
        setUser({...user,[name]:value})
    }

    const register=()=>{
        const {name,email,password,reEnterPassword}= user
        if(name && email && password && (password==reEnterPassword)){
            axios.post('http://localhost:8000/Signup',user)
            // alert("ppp")
           .then( res => alert(res.data.message))
        }
        else{
            alert("invalid input")
        }

    }

    return (
        <div className='signupcontainer'>
        <div className="signup">
         <h1>Signup</h1>
                <input className="input" type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handlechange}></input>
                <input className="input" type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handlechange}></input>
                <input className="input" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handlechange}></input>
                <input className="input" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Your Password" onChange={handlechange}></input>
                <div className="button" onClick={register}>Register</div>
                <div>OR</div>
                <Link to="/login" className="button input linkitem">Login</Link>
        </div>
        </div>

        
    )
}

export default Signup;
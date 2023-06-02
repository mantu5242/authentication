import React ,{useState} from "react";
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

// function Login({setLoggedIn}){
    function Login({onLogin}){
    const navigate = useNavigate();
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const handlechange=(e)=>{
        const {name,value}=e.target
        // console.log(name,value)
        setUser({...user,[name]:value})
    }

    const login =() => {
        axios.post('http://localhost:8000/login',user)
        .then(res => {
            alert(res.data.message);
            if(res.data.message == "Login Successfully"){
                onLogin(true);
            }    
        });

    }

    return (
        <div className="logincontainer">
            <div className="login">
                <h1>Login</h1>
                <input className='input' type="text"  name="email" value={user.email} onChange={handlechange} placeholder="Enter Your Email"></input><br/>
                <input className='input' type="password" name="password" value={user.password} onChange={handlechange}  placeholder="Enter Your Password"></input>
                <div className="button input" onClick={login}>Login</div>
                <div>OR</div>
                {/* <div className="button" onClick={()=> history.push("/Signup")}>Register</div> */}
                <div className="button input" > <Link to="/Signup" className="linkitem">Register</Link></div>
                
            </div>
        </div>
        
    )
}

export default Login;
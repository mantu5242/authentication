
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React,{useState , useEffect} from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/Signup';
import "../src/App.css";

function App() {
  let [LoggedIn,setLoggedIn] = useState(false)


  useEffect(() => {
    console.log('LoggedIn value:', LoggedIn);
  }, [LoggedIn]);
  
  // const [redirectHome, setRedirectHome] = useState(false);
  // const [loginError, setLoginError] = useState(false);
  // const [user,setLoginUser] = useState({});
  const handleLogin = (success) => {
    // setLoggedIn(1);
  // console.log(LoggedIn)
    // console.log(success);
    if (success) {
      // console.log("dknfon");
      setLoggedIn(true);
      // console.log(LoggedIn);
    }
    else {
      setLoggedIn(false);
    }
    // console.log(LoggedIn);
  };


  // const handleLogOut =(success)=>{
  //   if (success) {

  //   }
  //   else {
  //     setLoggedIn
  //   }
  // }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={LoggedIn ? <Home  onLogin={handleLogin} /> : <Login onLogin={handleLogin} />}/>
          <Route
            path="/home" element={LoggedIn ? <Home onLogin={handleLogin}/> : <Login  onLogin={handleLogin}/>}
          />
          <Route path='/signup' element={<Signup />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

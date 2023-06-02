    import React from 'react';
import { useNavigate } from 'react-router-dom';
    // import {useLocation, useNavigation} from 'react-router-dom';

    function Home (props){
        // const location=useLocation();
        // const navigate=useNavigate();
        console.log(props.onLogin,"message");
        const onLogin=props.onLogin;
        const handleLogOut=()=>{
            // setLoggedIn();
            onLogin(false)
            // navigate('/login');
        }

        return (
            <div className='homepage'>
                <div className='homebody'>
                        {/* <h2>welcome</h2> */}
                        {/* <br/> */}
                        <div className="button"  onClick={handleLogOut}>Logout</div>
                        {/* <button type="submit" onClick={handleLogOut}>Logout</button> */}
                </div>

            </div>
        )
    }
    export default Home;
import React, { useState } from "react";
import "./login.css";
import axios from 'axios';
import { useHistory } from 'react-router-use-history';
// import { NavLink} from 'react-router-dom';

const Login = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""

    })

    const handleChange = e => {
        // console.log(e.target);
        const { name, value } = e.target
        // console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {

        axios.post("http://localhost:9002/login", user) 
            // .then(res => console.log(res))
            .then(res => alert(res.data.message))
        history.push("/");
    }

    return (
        <div className="login">

            {/* {console.log("User", user)} */}

            <h1> Login </h1>
            <input type="text" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
            <div className="button" onClick={login} > Login </div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")} > Register </div>

            {/* <NavLink to="/register" className="button"> Register </NavLink> */}


        </div>
    )
}

export default Login
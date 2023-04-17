import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-use-history";

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        // console.log(e.target);
        const {name, value} = e.target 
        // console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })

    }

    const register = () => {
         const { name, email, password, reEnterPassword} = user
     if(name && email && password && (password === reEnterPassword)) {
            // alert("posted")
            axios.post("http://localhost:9002/register", user)
            // .then(res => console.log(res))
            .then(res => {
                alert(res.data.message)
                history.push("/login")
            })
        }
        else {
            alert("invalid")
        }
    }


    return (

        // <form>

        <div className="register">
             {/* {console.log("User", user)} */}

            <h1>Register</h1>
            Name <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}/>
            Email <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} />
            Password <input type="password" name="password" value={user.password} placeholder="Password"onChange={handleChange} />
            Confirm Password <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange} />
            <div className="button" onClick={register}> Register</div>
            <div>or</div>
            <div className="button" onClick={ () => history.push("/login")} > Login</div>

            {/* <button type="reset">Reset</button> */}
            {/* <button type="submit">Submit</button>    yeh sab form m hi chalta h */}


        </div>

        // </form>


    )
}

export default Register
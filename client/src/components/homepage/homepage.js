import React from "react";
import "./homepage.css";
import { useHistory } from "react-router-use-history";

const Homepage = () => {

    const history = useHistory ()

    return (
        <div className="homepage"> 
        <h1> Hello Homepage</h1>
        <div className="button" onClick={ () => history.push("/") } > Logout </div>
         </div>
    )
}

export default Homepage 
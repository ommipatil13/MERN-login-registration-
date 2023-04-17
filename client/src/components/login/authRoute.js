import React, {Redirect} from "react";
import Login from "./login";

const AuthRoute = () => {

    const user = Login();

    return

    (

        <>
            if(!user){
                <Redirect to="/" />
            } else {
                <Redirect to="/login" />
            }

        </>
    )
}

export default AuthRoute;
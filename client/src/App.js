import React from 'react';
import './App.css';
import Login from "./components/login/login";
import Register from "./components/register/register";
import Homepage from './components/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from './components/login/authRoute';

function App() {

  // const [user, setLoginUser] = useState ({}) 

  return (
    <div className="App">


      <Router>

        {/* <Switch>
          <Route path="/"> <Homepage/> </Route>
          <Route path="/login"> <Login/> </Route>
          <Route path="/register"> <Register/> </Route>
        </Switch> */}

        {/* <Login />
       <Register /> 
       <Homepage />   */}

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <AuthRoute> <Route exact path="/login" element={<Login />} /> </AuthRoute>
          <Route exact path="/register" element={<Register />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

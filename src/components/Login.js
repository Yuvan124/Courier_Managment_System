import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

import axios from 'axios'; 

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); // State to store login status
  const navigate = useNavigate(); 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        pass: pass,
      });

      if (response.data.status === 'ok') {
       
        setLoginStatus("Login Successfully");
        
        navigate("/");
      } else {
       
        console.error('Error:', response.data.error);
        setLoginStatus("Login Failed");
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus("Login Failed");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="Container">
           <img src="https://media.tenor.com/WfifMA3NMjEAAAAC/purple-rays.gif" className="video-background" alt="img"></img>
      
      <div className="cc">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        {/* Conditionally display the login status */}
        {loginStatus && <p>{loginStatus}</p>}
        <button className="link-btn" onClick={handleRegisterClick}>
          Don't have an account? Sign Up here.
        </button>
      </div>
    </div>
  );
};

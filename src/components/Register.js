import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../sign.css";

import axios from 'axios'; 

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(""); // State for registration status
  const [showSuccess, setShowSuccess] = useState(false); // State to control success message display
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        name: name,
        email: email,
        pass: pass,
      });

      if (response.data.status === 'ok') {
        // Registration successful, update the state
        setRegistrationStatus("Registration Successful");
        setShowSuccess(true);
      } else {
        console.error('Error:', response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="Container">
     <img src="https://media.tenor.com/WfifMA3NMjEAAAAC/purple-rays.gif" className="video-background" alt="img"></img>
      <div className="cc">
        <h2>Sign Up</h2>
        {/* Conditionally render the success message and login button */}
        {showSuccess && (
          <div>
            <p>{registrationStatus}</p>
            <button className="button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
        {/* Registration form */}
        {!showSuccess && (
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Full Name"
            />
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
            <button type="submit" className="button">
              Register
            </button>
          </form>
        )}
        {/* Login button */}
        {!showSuccess && (
          <button className="link-btn" onClick={handleLoginClick}>
            Already have an account? Login here.
          </button>
        )}
      </div>
    </div>
  );
};

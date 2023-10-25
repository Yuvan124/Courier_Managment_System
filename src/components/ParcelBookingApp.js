import React, { useState } from 'react';
import './ParcelBookingApp.css';
import { useNavigate } from "react-router-dom";

function ParcelBookingApp() {
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
 
  const [trackingId, setTrackingId] = useState('');
  const [isOrderTaken, setIsOrderTaken] = useState(false);
  const navigate = useNavigate(); 

  const generateTrackingId = () => {
    const randomId = Math.floor(Math.random() * 1000000);
    return `${randomId}`;
  };

  const handleParcelBooking = (e) => {
    e.preventDefault();

  
    const newTrackingId = generateTrackingId();
    setTrackingId(newTrackingId);

    
    setIsOrderTaken(true);
  };

  const handleRegisterClick = () => {
   
    navigate("/payment");
  };

  return (
    <div className="parcel-booking">
      <h2>Parcel Delivery</h2>
      {!isOrderTaken ? (
        <form onSubmit={handleParcelBooking}>
          <div className="form-group">
            <label htmlFor="userName">Your Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userAddress">Your Address:</label>
            <input
              type="text"
              id="userAddress"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="toAddress">To Address:</label>
            <input
              type="text"
              id="toAddress"
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
              required
            />
          </div>
       
          
          <button type="submit">Take Parcel</button>
        </form>
      ) : (
        <div className="order-taken">
          <p>Your order has been taken.</p>
          <p>Parcel ID: {trackingId}</p>
          <button  onClick={handleRegisterClick}>
          Proceed to Payment
        </button>
           
         
        </div>
      )}
    </div>
  );
}

export default ParcelBookingApp;

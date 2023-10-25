import React, { useState } from 'react';
import './Payment.css';

function PaymentComponent() {
  const [amount, setAmount] = useState('');
  const[Parcel,setParcel]=useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isPaid, setIsPaid] = useState(false);
 
  const [trackingId, setTrackingId] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

   
    setIsPaid(true);
    const newTrackingId = generateTrackingId();
    setTrackingId(newTrackingId);
  };
 
 


  const generateTrackingId = () => {
    const randomId = Math.floor(Math.random() * 1000000);
    return `${randomId}`;
  };

  return (
      <div className="ef">

     
    <div className="payment-component">
      <h2>Payment</h2>
      
      <form onSubmit={handlePayment}>
      <div className="form-group">
        <label htmlFor="parcelId">Parcel ID:</label>
        <input
          type="text"
          id="parcelId"
          value={Parcel}
          onChange={(e) => setParcel(e.target.value)}
          required
        />
      </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="upi">UPI</option>
            <option value="netBanking">Net Banking</option>
            <option value="debitCard">Debit Card</option>
          </select>
        </div>
        <button type="submit">Pay Now</button>
      </form>
      {isPaid && (
          <div className="payment-success">
            <p>Payment Successful!</p>
            <p>Tracking ID: {trackingId}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default PaymentComponent;

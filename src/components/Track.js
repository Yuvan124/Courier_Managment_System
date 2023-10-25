import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './track.css';

function Track() {
  const [trackingId, setTrackingId] = useState('');
  const [coordinates, setCoordinates] = useState([0, 0]); 

  const handleTrack = (e) => {
    e.preventDefault();
    
    const dummyCoordinates = [51.505, -0.09]; 
    setCoordinates(dummyCoordinates);
  };

  return (
    <div className="track-component">
      <h2>Track Your Parcel</h2>
      <form onSubmit={handleTrack}>
        <div className="form-group">
          <label htmlFor="trackingId">Enter Tracking ID:</label>
          <input
            type="text"
            id="trackingId"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Track</button>
      </form>
      {coordinates[0] !== 0 && (
        <div className="map-container">
          <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates}>
              <Popup>Your Parcel Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default Track;

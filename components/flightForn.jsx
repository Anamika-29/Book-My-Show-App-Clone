import React from "react";

function FlightForm({ roomIndex, adults, children, onAdultChange, onChildChange }) {
  const handleAdultChange = (e) => {
    onAdultChange(roomIndex, parseInt(e.target.value));
  };

  const handleChildChange = (e) => {
    onChildChange(roomIndex, parseInt(e.target.value));
  };

  return (
    <div className="flight-form">
      <div className="form-group">
        <label htmlFor={`adults-${roomIndex}`}>Adults:</label>
        <input
          type="number"
          id={`adults-${roomIndex}`}
          min="1"
          value={adults}
          onChange={handleAdultChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`children-${roomIndex}`}>Children:</label>
        <input
          type="number"
          id={`children-${roomIndex}`}
          min="0"
          value={children}
          onChange={handleChildChange}
        />
      </div>
    </div>
  );
}

export default FlightForm;

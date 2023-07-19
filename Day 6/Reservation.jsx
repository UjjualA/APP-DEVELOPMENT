import React from 'react';
import './Signup.css';  
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Reservation= () => {
  return (
    <form className="login-form">
      <h2 className='mm'>Reservation </h2>
      <fieldset className="login-fieldset">
        <div className="form-group">
          <label className="form-label"><legend>UserName</legend></label>
          <input type="text" id="name" name="name" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label"><legend>Phone Number</legend></label>
          <input type="number" id="phone number" name="Phone Number" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label"><legend>No.Of.Members</legend></label>
          <input type="number" id="Members" name="Members" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label"><legend>Date</legend></label>
          <input type="date" id="date" name="date" className="form-input" required />
        </div>
        <Link to='/'>
        <button type="submit" className="login-button">Reserve</button>
        </Link>
      </fieldset>
    </form>
  );
};
export default Reservation;
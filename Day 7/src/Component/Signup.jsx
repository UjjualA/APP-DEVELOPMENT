// import React from 'react';
// import './Signup.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const Signup= () => {
//   return (
//     <form className="login-form">
//       <h2>Registration</h2>
//       <fieldset className="login-fieldset">
//         <div className="form-group">
//           <label className="form-label"><legend>Username</legend></label>
//           <input type="text" id="username" name="username" className="form-input" required />
//         </div>
//         <div className="form-group">
//           <label className="form-label"><legend>Email</legend></label>
//           <input type="email" id="email" name="email" className="form-input" required />
//         </div>
//         <div className="form-group">
//           <label className="form-label"><legend>Password</legend></label>
//           <input type="password" id="password" name="password" className="form-input" required />
//         </div>
//         <div className="form-group">
//           <label className="form-label"><legend>Confirm Password</legend></label>
//           <input type="password" id="Confirm password" name="Confirm password" className="form-input" required />
//         </div>
//         <Link to='/'>
//         <button type="submit" className="login-button">Register</button>
//         </Link>
//       </fieldset>
//       <p className='crea'>Already Have an Account? 
//       <Link to='/'>Login</Link>
//       </p>
//     </form>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import './Signup.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const handleButtonClick = () => {
//   alert('Successfully Registered');
// };

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (username.trim() === '') {
      validationErrors.username = 'Username is required';
    }

    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    }

    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    if (confirmPassword.trim() === '') {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Registration logic goes here
      console.log('Registration successful');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <h2>Registration</h2>
      <fieldset className="login-fieldset">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="login-button" >
          Register
        </button>
      </fieldset>
      <p className="crea">
        Already Have an Account? <Link to="/">Login</Link>
      </p>
    </form>
  );
};

export default Signup;

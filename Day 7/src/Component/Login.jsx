// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
// import './Login.css';
// import {useState} from 'react';

// function Login(){
//     const[userName,setUserName]=useState('');

//     const handleLogin=()=>{
//       history.push('/dash',{userName});
//     };
//     const handleNameChange=(event)=>{
//       setUserName(event.target.value);
//     }; 
//   return (

//     <form className="login-form">
//         <h3>Login</h3>
//       <fieldset className="login-fieldset">
//         <div className="form-group">
//           <label className="form-label"><legend>Username</legend></label>
//           <input type="text" id="username" name="username" value={userName} className="form-input" required onChange={handleNameChange}/>
//         </div>
//         <div className="form-group">
//           <label className="form-label"><legend>Password</legend></label>
//           <input type="password" id="password" name="password" className="form-input" required />
//         </div>
//         <Link to='/dash'>
//         <button type="submit"  className="login-button">Log In
//         </button>
//         </Link>
//       </fieldset>
//       <p className='crea'>Create an Account ?
//       <Link to='/Signup'>Register</Link>
//       </p>
//     </form> 
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [userName, setUserName] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();
//     if (userName.trim() === '') {
//       alert('Please enter a username');
//       return;
//     }
//     // Perform login logic here
//     console.log('Logged in as:', userName);
//   };

//   const handleNameChange = (event) => {
//     setUserName(event.target.value);
//   };

//   return (
//     <form className="login-form" onSubmit={handleLogin}>
//       <h3>Login</h3>
//       <fieldset className="login-fieldset">
//         <div className="form-group">
//           <label className="form-label">
//             <legend>Username</legend>
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={userName}
//             className="form-input"
//             required
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label">
//             <legend>Password</legend>
//           </label>
//           <input type="password" id="password" name="password" className="form-input" required />
//         </div>
//         <button type="submit" className="login-button">
//         <Link to="/dash">
//           Log In
//         </Link>
//         </button>
//       </fieldset>
//       <p className="crea">
//         Create an Account? <Link to="/Signup">Register</Link>
//       </p>
//     </form>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName.trim() === '') {
      alert('Enter Your Username');
      return;
    }
    navigate('/dash', { state: { userName } });
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form className="login-form">
      <h3>Login</h3>
      <fieldset className="login-fieldset">
        <div className="form-group">
          <label className="form-label">
            <legend>Username</legend>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            className="form-input"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            <legend>Password</legend>
          </label>
          <input type="password" id="password" name="password" className="form-input" required />
        </div>
        <button type="button" className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </fieldset>
      <p className="crea">
        Create an Account? <Link to="/Signup">Register</Link>
      </p>
    </form>
  );
}

export default Login;

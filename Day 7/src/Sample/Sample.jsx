// import React from 'react'
// import { useState } from 'react'
// import './style.css'

// function Sample() {
// const [formdata, setFormdata] =useState({
//     name:'',
//     phone:0,
//     email:'',
//     password:''

// })
// const handleChange = (e) =>{
// e.preventDefault();
//     setFormdata({...formdata,[e.target.id]:e.target.value})
// }
// const handleSubmit=(e)=>{
//   e.preventDefault();
//   alert(formdata.email);
// }


//     return (
//     <div className='forms'>
//       <form className='form-auth' onSubmit={handleSubmit}>
//         <input type="text" name="name" id="name" className='form-ip' placeholder='Name' onChange={handleChange}/>
//         <input type="number" name="phone" id="phone"  className='form-ip' placeholder='Phone' onChange={handleChange}/>
//         <input type="email" name="email" id="email"  className='form-ip' placeholder='Email' onChange={handleChange}/>
//         <input type="password" name="password" id="password"  className='form-ip' placeholder='PAssword' onChange={handleChange}/>
// <button type="submit">Register</button>
//       </form>
//     </div>
//   )
// }

// export default Sample

import { Route, Routes } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import Signup from './Component/Signup.jsx';
import Login from './Component/Login.jsx';
import React from 'react';
import DashBoard from './Component/DashBoard.jsx';
import Profile from'./Component/Profile.jsx';
import Restaurant from './Component/Restaurant.jsx';
import Reservation from './Component/Reservation.jsx';


function App(){
    return(
            <Routes>
                <Route exact path='/'element={<Login/>}/>
                <Route exact path='/Signup'element={<Signup/>}/>
                <Route exact path="/dash" element={<DashBoard/>}/>
                <Route exact path='/Profile'element={<Profile/>}/>
                <Route exact path='/Restaurant' element={<Restaurant/>}/>
                <Route exact path='/Reservation' element={<Reservation/>}/>
            </Routes>
    );
}

export default App

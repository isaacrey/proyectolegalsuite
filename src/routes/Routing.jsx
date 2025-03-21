import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';



function Routing() {

  return (
    
    <div>
        <BrowserRouter>
              <Routes>
                  <Route path="/register" element={<RegisterPage/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/home" element={<HomePage/>}/>          
              </Routes>
        </BrowserRouter>
      </div>
  );
}

export default Routing


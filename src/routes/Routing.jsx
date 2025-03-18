import React from 'react';

import {  Routes, Route } from 'react-router';


import Register from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ListPage from '../pages/ListPage';



function Routing() {

  return (
   
        <Routes>
      
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/List" element={<ListPage/>}/>

                             
                            
        </Routes>
      
  );
}

export default Routing


import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Register from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ListPage from '../pages/ListPage';



function Routing() {

  return (
    <div>
      <Router>
        <Routes>
      
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/List" element={<ListPage/>}/>

                             
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing


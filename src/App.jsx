import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import Register from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import ListPage from './pages/ListPage';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      {/* <Route path="/List" element={<ListPage/>}/> */}

                       
                      
  </Routes>

    </>
  )
}

export default App

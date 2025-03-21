import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Routing from './routes/Routing'
import NavBar from './components/Home/Home'

function App() {
 

  return (
    <>
        <div>
            <Routing />
            <NavBar />
        </div>
    </>
  )
}

export default App

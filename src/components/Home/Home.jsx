import React from 'react'
import './styles/Navbar.css/'


const NavBar = () => {

  return (
    
<div class="nav">
  <div class="container">
    <div class="btn">Home</div>
    <div class="btn">Contact</div>
    <div class="btn">About</div>
    <div class="btn">FAQ</div>
    <svg
      class="outline"
      overflow="visible"
      width="400"
      height="60"
      viewBox="0 0 400 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        class="rect"
        pathLength="100"
        x="0"
        y="0"
        width="400"
        height="60"
        fill="transparent"
        stroke-width="5"
      ></rect>
    </svg>
  </div>
</div>
  )
}
  

export default Home
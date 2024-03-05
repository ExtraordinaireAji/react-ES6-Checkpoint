import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="first-child">
        <img src="./images/Logo.png" alt="" />
        </div>
        <div className="second-child">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Project</a>
        <a href="">Contact</a>
        </div>
        <div className="third-child">
        <i class="fa-regular fa-user"></i>
        <i class="fa-solid fa-phone"></i>
        <i class="fa-regular fa-envelope"></i>
        </div>
    </nav>
  )
}

export default Navbar
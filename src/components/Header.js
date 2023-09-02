import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import About from '../About';
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
  <div className="container">
    <Link className="navbar-brand text-white" to='/'><i>Travel</i></Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-3">
          <Link className="nav-link active text-white" to='/'>Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link mr-2 text-white" to='/about'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/contact-us'>Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header

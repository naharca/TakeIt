import React, { Component } from 'react';
import logo from '../../assets/logo/take_it.svg';
import '.././NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <a href="index.html">
          <img src={logo} className="navbar__logo remove-bg" alt="logo" />
        </a>

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" >Sign In</a>
          </li>
        </ul>
        <a href="#">
        < CartWidget />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;

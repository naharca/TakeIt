import React from 'react';
import { Link } from 'react-router-dom';
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

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active" >Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to='/category/Notebook' class="dropdown-item"><p>Notebooks</p></Link>
              <Link to='/category/HDD' class="dropdown-item"><p>HDD's</p></Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item"><p>Go to category</p></Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" >Cart</Link>
          </li>
          <li className="nav-item">
            <Link  to="/" className="nav-link" tabindex="-1" >Sign In</Link>
          </li>
        </ul>
        <Link>
          < CartWidget />
        </Link>

      </nav>
    </div>
  );
}

export default NavBar;

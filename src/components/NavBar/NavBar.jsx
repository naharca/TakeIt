import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/take_it.svg';
import '.././NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} className="navbar__logo remove-bg" alt="logo" />
        </Link>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active" >Home</Link>
          </li>

          <li className="nav-item dropdown">
            <button className="nav-link  border-0 bg-transparent" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to='/category/Notebook' className="dropdown-item"><p>Notebooks</p></Link>
              <Link to='/category/HDD' className="dropdown-item"><p>HDD's</p></Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link" >Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-in" className="nav-link" tabIndex="-1" >Sign In</Link>
          </li>
        </ul>
        <Link to="/cart">
          < CartWidget />
        </Link>

      </nav>
    </div>
  );
}

export default NavBar;

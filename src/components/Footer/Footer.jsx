import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/take_it_lg.png";
import ".././Footer/Footer.css";

function Footer() {
  return (
    <div className="container-fluid pb-0 mb-0 pl-0 justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-1">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <Link to="/">
                  <img
                    src={logo}
                    className="navbar__logo remove-bg"
                    alt="logo"
                  ></img>
                </Link>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul className="text-muted  mb-1 list-unstyled ">
                  <li>
                    <Link to="/" className="text-muted  mb-1">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="link dropdown-toggle border-0 bg-transparent text-muted mb-1"
                      id="navbarDropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Products
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="/category/Notebook" className="dropdown-item">
                        <p>Notebooks</p>
                      </Link>
                      <Link to="/category/HDD" className="dropdown-item">
                        <p>HDD's</p>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/" className="text-muted  mb-1">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-active bold-text mt-sm-0 mt-5">
                  <b>ADDRESS</b>
                </h6>
                <p className="mb-1">1152, NEW FAKE STREET</p>
                <p>FAKE AVENUE</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0 bold-text">
                  {" "}
                  <span className="mx-2">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>{" "}
                </p>
                <small className="rights">
                  <span>&#174;</span> Take-IT All Rights Reserved.
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                <h6 className="text-muted bold-text">
                  <b>Write Us!</b>
                </h6>
                <small>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  take-it@takeit.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

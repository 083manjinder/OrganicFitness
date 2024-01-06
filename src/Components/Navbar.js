
import logo from '../images/logo3.png'
import { NavLink } from 'react-router-dom'
import React from 'react';

// import "../stylesheet.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"

const Navbar = () => {
    const token = localStorage.getItem("token")
    let isLogin = true;
    if (token === null) {
        isLogin = false;

    }


    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ps-4">
                    <NavLink className="navbar-brand logomain " to="#"><img src={logo} className="logo" alt='logo' /></NavLink>
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-lg-0 fs-3 me-5 d-flex align-items-center">

                            <li className="nav-item pe-5">
                                <NavLink className={`nav-link navlink ${({ isActive }) => isActive ? "active" : ""}`} to="/" >HOME</NavLink>
                            </li>
                            <li className="nav-item pe-5">
                                <NavLink className={`nav-link navlink ${({ isActive }) => isActive ? "active" : ""}`} to="/about" >ABOUT</NavLink>
                            </li>

                            <li className="nav-item pe-5">
                                <NavLink className={`nav-link   navlink ${({ isActive }) => isActive ? "active" : ""}`} to="/contact" >CONTACT</NavLink>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div className="container-fluid">
                    <img src={logo} className={style.logo} alt='logo' />

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav   mb-lg-0 fs-3 me-5 d-flex align-items-center">
                            <li className="nav-item pe-5">
                                <NavLink className={`nav-link navlink ${({ isActive }) => isActive ? "active" : ""}`} to="/" >HOME</NavLink>
                            </li>
                            <li className="nav-item pe-5">
                                <NavLink className={`nav-link navlink ${({ isActive }) => isActive ? "active" : ""}`} to="/about" >ABOUT</NavLink>
                            </li>

                            <li className="nav-item pe-5">
                                <NavLink className={`nav-link   navlink ${({ isActive }) => isActive ? "active" : ""}`} to="/contact" >CONTACT</NavLink>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav> */}

        </React.Fragment>
    )
}

export default Navbar
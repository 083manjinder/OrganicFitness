
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import React from 'react';
import style from './style.module.css'

const Navbar = () => {

    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <div className="container-fluid">
                <img src={logo} className={style.logo} alt='logo'/>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav   mb-lg-0 fs-3 me-5 d-flex align-items-center">
                        <li className="nav-item pe-5">
                            <NavLink className={`nav-link ${({isActive}) =>   isActive ? `${style.active}` : ""}`} to="/" >HOME</NavLink>
                        </li>
                        <li className="nav-item pe-5">
                            <NavLink className={`nav-link ${({isActive}) =>   isActive ? `${style.active}` : ""}`} to="/about" >ABOUT</NavLink>
                        </li>
                       
                        <li className="nav-item pe-5">
                            <NavLink className={`nav-link ${({isActive}) =>   isActive ?  `${style.active}` : ""}`} to="/contact" >CONTACT</NavLink>
                        </li>
                       


                    </ul>

                </div>
            </div>
        </nav>

        </React.Fragment>
    )
}

export default Navbar
import React from "react";
import Signup from "../components/Signup";


import './header.css';


import {
    Link,
  } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
            <Link to='/' className="lookfor">
                <div className="logo"></div>
            </Link>
                <div className="links">
                <Link to='/' className="lookfor">EXPLORE</Link>
                <Link to='/login' className="signup">LOGIN / SIGNUP</Link>

                </div>
            </nav>
        </header>
    )
}
export default Header;
import React  from "react";
import './header.css';
import {
    Link,
  } from "react-router-dom";

    const Hamburguer = () => {
        return (
            <div>
            <input id="menu-hamburger" type="checkbox"/>
            <label for="menu-hamburger">
                <div className="menu"><span className="hamburger"></span></div>
            </label>
            <ul className="lista-menu">
                <li> <Link to='/' >EXPLORE</Link></li>
                <li> <Link to='/login' >LOGIN / SIGNUP</Link></li>
                
            </ul>
        
            </div>
        )
    }

export default Hamburguer;
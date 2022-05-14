import React from "react";
import {
    Link,
  } from "react-router-dom";


// CSS
import './header.css';



const Header = () => {
    return (
        <header>
            <nav>
            <Link to='/' className="lookfor">
                {/* <div className="logo"></div> */}



                <svg width="215" height="90" viewBox="0 0 115 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.12939 27.4369L23.7619 27.0363C27.5011 18.7566 37.784 4 56.4133 4C78.2707 4 88.8644 22.429 89.866 27.4369" stroke="#FF475D" strokeWidth="6.00946" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-1"></path>
                <path d="M111.5 44.0631L90.8675 44.4637C87.1283 52.7434 76.8454 67.5 58.2161 67.5C36.3587 67.5 25.765 49.071 24.7634 44.0631" stroke="#FF475D" strokeWidth="6.00946" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-2"></path>
                <circle cx="57.6151" cy="36.4511" r="16.4259" fill="#1C17F2" className="svg-elem-3"></circle>
                </svg>


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
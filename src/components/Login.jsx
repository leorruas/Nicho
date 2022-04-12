import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from './header';
import Logo from './logo.svg';

// CSS
import './signup.css';
import '../App.css';
import './login.css';

const Login = () => {
    return (

    <>
    <main className="login">
        <Link to='/'>
            <div className="logo-white"></div>
        </Link>
        <h1 className="titulo-form"> 
             Seja bem-vindo ao Nicho!</h1>

        <form>
            <input type='text' name="username" placeholder="username" />
            <input type='password' name="senha" placeholder="senha" />
            
            <button>LOGIN</button>  
            
            <span className="register">
                <Link to='/signup'>
                    Signup
                </Link>    
            </span>
           
        </form>
     
    
    </main>
    </>
    )
}
export default Login;
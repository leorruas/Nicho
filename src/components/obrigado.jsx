import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from './header';
import brigado from './copo.svg';
import '../App.css'



const Obrigado = () => {
    return (
        <>
            <Header/>
            <main className="obrigado">
                
            <img src={brigado} alt="" />
            <h1>Obrigado por se inscrever! Você está mais perto agora de aumentar a sua rede.</h1>
            <p>Enviamos um email para confirmar o seu endereço.</p>
            <Link to="/"> Explore oportunidades de negócio perto de você </Link>
            </main>

            </>
    )
}
export default Obrigado;
import React from "react";
// Components
import Header from './header';
import signup from './signup.svg';
// CSS
import './signup.css';
import '../App.css';

const Signup = () => {
    return (
    <>
        <Header/>
        <main>
            <h1 className="titulo-form"> 
             <img src={signup} alt=" " /> Seu negócio disponível para toda a comunidade </h1>
            <div className="tagline">Preencha o formulário abaixo para conhecermos melhor você e o seu negócio</div>
            <form>
                {/* SOBRE USUÁRIO */}
                <div className='sobre-vc'>
                    <h1>sobre você</h1>
                    <input type="text" placeholder="username" name="username"/>
                    <input className="meio" type="text"placeholder='user@seudominio.com'  name="email"/>
                    <input className="meio" type="password" placeholder='senha' name="password" />
                </div>
                {/* SOBRE EMPRESA */}
                <div className='sobre-empresa'>
                    <h1>sobre sua empresa</h1>
                    <input type="text" placeholder='nome da sua empresa' name="nome-empresa"/>
                    <textarea placeholder="sobre a sua empresa (um breve resumo sobre seu negócio)">
                       
                    </textarea>
                    <input type="tel"  className="meio" placeholder='telefone de contato' /> 
                    <input type="text" className='meio' placeholder='website' name="website" />
                    <input type="text" name="endereco" placeholder="endereço"/>
                   <div className='enviar'> 
                        <button> enviar</button>
                   </div>
                </div>
            </form>


      
        </main>
    </>
    )
}
export default Signup;
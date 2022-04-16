import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
// Components
import Header from './header';
import signup from './signup.svg';
// CSS
import './signup.css';
import '../App.css';


// const getLocalStorage = () => JSON.parse(localStorage.getItem('data')) ?? [];
// const setLocalStorage = (data) => localStorage.setItem("data", JSON.stringify(data));


// const createData = (data) => {
//     const Data = getLocalStorage('data');
//     setLocalStorage(Data);
// }






const Signup = () => {
    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
    
    const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
    
    

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const dbClient = getLocalStorage()
        dbClient.push(data)
       setLocalStorage(dbClient)
       window.location.href = "./obrigado";
    }
    return (
    <>
        <Header/>
        <main>
            <h1 className="titulo-form"> 
             <img src={signup} alt=" " /> Seu negócio disponível para toda a comunidade </h1>
            <div className="tagline">Preencha o formulário abaixo para conhecermos melhor você e o seu negócio</div>
            <form  onSubmit={handleSubmit(onSubmit)}>
                {/* SOBRE USUÁRIO */}
                <div className='sobre-vc'>
                    <h1>sobre você</h1>
                    <input type="text" placeholder="username" {...register("username")}  />
                    <input className="meio" type="text" placeholder='user@seudominio.com'  {...register("email")}/>
                    <input className="meio" type="password" placeholder='senha' {...register("password")} />
                </div>
                {/* SOBRE EMPRESA */}
                <div className='sobre-empresa'>
                    <h1>sobre sua empresa</h1>
                    <input type="text" placeholder='nome da sua empresa' {...register("nome-empresa")} />
                    <textarea placeholder="sobre a sua empresa (um breve resumo sobre seu negócio)" {...register("sobre-empresa")}>
                       
                    </textarea>
                    <input type="tel"  className="meio" placeholder='telefone de contato' 
                    {...register("telefone")}/> 
                    <input type="text" className='meio' placeholder='website' {...register("website")} />
                    <input type="text" {...register("endereco")} placeholder="endereço" />
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
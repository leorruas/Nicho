import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components

// CSS
import './signup.css';
import '../App.css';
import './login.css';

const Login = () => {


  const onSubmit = (data) => {
    const username = data.username;
    const senha = data.password;
    const filtro = (clients) => {
      const empresa = clients.username.toLowerCase();
      const senhaDigitada = clients.password;
      if (empresa.includes(username) && senhaDigitada == senha) {
        let incorreto = document.querySelector('.incorreto');
        incorreto.innerHTML = ' ';
        let retirarForm = document.querySelector('.formulario');
        // retirarForm.classList.add('sumir');
        return empresa;
      }
    };
    const user = fetch('http://localhost:5000/posts')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const dadosUser = res.filter(filtro);

        if (dadosUser.length === 1) {
          setFoundUser(dadosUser);
        }
      });
  };

  return (
    <>
      <main className="login">
        <Link to="/">
          <div className="logo-white"></div>
        </Link>
        <h1 className="titulo-form">Seja bem-vindo ao Nicho!</h1>
        <div className="incorreto"></div>
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
          <input
            id="username"
            placeholder="username"
            type="text"
            {...register('username')}
          />
          <input
            id="password"
            placeholder="senha"
            type="text"
            {...register('password')}
          />

          <button>LOGIN</button>

          <span className="register">
            <Link to="/signup">Signup</Link>
          </span>
        </form>
        <div className="editar"></div>
      </main>
    </>
  );
};
export default Login;

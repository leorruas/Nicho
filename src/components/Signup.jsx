import React from 'react';
import { useForm } from 'react-hook-form';
// Components
import Header from './header';
import signup from './signup.svg';
// CSS
import './signup.css';
import '../App.css';
import Hamburguer from './hamburger';

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const novoCadastro = data;
    console.log(novoCadastro);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5000/posts', options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
    window.location.href = './obrigado';
  };

  return (
    <>
      <Header />
      <main>
        <h1 className="titulo-form">
          <img src={signup} alt=" " /> Seu negócio disponível para toda a
          comunidade{' '}
        </h1>
        <div className="tagline">
          Preencha o formulário abaixo para conhecermos melhor você e o seu
          negócio
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* SOBRE USUÁRIO */}
          <div className="sobre-vc">
            <h1>sobre você</h1>
            <input
              type="text"
              placeholder="username"
              {...register('username', { required: true })}
            />

            <input
              className="meio"
              type="text"
              placeholder="user@seudominio.com"
              {...register('email', { required: true })}
            />
            <input
              className="meio"
              type="password"
              placeholder="senha"
              {...register('password', { required: true })}
            />
          </div>
          {/* SOBRE EMPRESA */}
          <div className="sobre-empresa">
            <h1>sobre sua empresa</h1>
            <input
              type="text"
              placeholder="nome da sua empresa"
              {...register('empresa', { required: true })}
            />
            <textarea
              placeholder="sobre a sua empresa (um breve resumo sobre seu negócio e seus interesses)"
              {...register('sobre', { required: true })}
            ></textarea>
            <input
              type="tel"
              className="meio"
              placeholder="telefone de contato"
              {...register('telefone')}
            />
            <input
              type="text"
              className="meio"
              placeholder="website"
              {...register('website')}
            />
            <input
              type="text"
              {...register('endereco', { required: true })}
              placeholder="endereço"
            />
            <div className="enviar">
              <button> enviar</button>
            </div>
          </div>
          <div className="errors">
            <p>{errors.username && 'username: Campo obrigatório!'}</p>
            <p> {errors.email && 'email: Campo obrigatório!'}</p>
            <p> {errors.password && 'senha: Campo obrigatório!'}</p>
            <p>
              {' '}
              {errors.empresa && 'nome da sua empresa: Campo obrigatório!'}
            </p>
            <p> {errors.sobre && 'sobre sua empresa: Campo obrigatório!'}</p>
            <p> {errors.endereco && 'endereço: Campo obrigatório!'}</p>
          </div>
        </form>
      </main>
      <Hamburguer />
    </>
  );
};
export default Signup;

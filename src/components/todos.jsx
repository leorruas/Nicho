import React from 'react';

// Components
import Header from './header';
import '../App.css';
import './todos.css';
import Hamburguer from './hamburger';

const Todos = () => {
  const renderAllClients = (resultadoBusca) => {
    let newSection = document.createElement('section');
    newSection.innerHTML = `
      <div class="dois">
        <div class="empresa">
          <h1>${resultadoBusca.empresa}</h1>
          <p class="distancia">está há 2km de você</p>
        </div>

        <div class="sobre">${resultadoBusca.sobre}</div>
      </div>
      <div class="flex">
        <div class="endereco">${resultadoBusca.endereco}</div>
        <div class="contato">email: ${resultadoBusca.email}</div>
        <div class="contato">telefone: ${resultadoBusca.telefone}</div>
      </div>
    `;
    document.querySelector('.todos').appendChild(newSection);
  };
  const todos = fetch('http://localhost:5000/posts')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      res.forEach(renderAllClients);
    });

  return (
    <>
      <Header />
      <main>
        <h1 className="titulo">
          Conheça todos os empreendimentos que fazem parte de nossa rede!
        </h1>
        <div className="todos"></div>
      </main>
      <Hamburguer />
    </>
  );
};
export default Todos;

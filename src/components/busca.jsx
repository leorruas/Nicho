import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// CSS
import './busca.css';
import './todos.css';

const Busca = () => {
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

  var db_clients = JSON.parse(localStorage.getItem('db_client'));
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    document.querySelector('.todos').innerHTML = '';
    const busca = data.busca;
    const filtro = (clients) => {
      const empresa = clients.empresa.toLowerCase();
      if (empresa.includes(busca)) {
        console.log(empresa);
        return empresa;
      }
    };
    const resultadoBusca = db_clients.filter(filtro);
    console.log(resultadoBusca);

    resultadoBusca.forEach(renderAllClients);
  };

  return (
    <div className="Inicial">
      <h1 className="opening">
        Encontre oportunidades próximas de você e cresça a sua rede de atuação!
      </h1>

      <form className="pesquisaHome" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-home"
          id="buscaIput"
          placeholder="procure por negócios em nossa rede"
          type="text"
          {...register('busca')}
        />
        <button className="home-send" id="buscaEmpresas"></button>
      </form>

      <div className="advanced">
        <Link to="/todos"> LISTA DE TODOS OS NEGÓCIOS</Link>
      </div>

      <div className="todos">
        {/* {resultadoBusca.map(renderAllClients)} */}
      </div>
    </div>
  );
};
export default Busca;

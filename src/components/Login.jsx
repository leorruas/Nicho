import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components

// CSS
import './signup.css';
import '../App.css';
import './login.css';

const Login = () => {
  const [allUsers, setAllUsers] = useState(null);
  React.useEffect(() => {
    const user = fetch('http://localhost:5000/posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllUsers(json);
      });
  }, []);

  const [foundUser, setFoundUser] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const novoCadastro = data;
    console.log(novoCadastro);
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch('http://localhost:5000/posts/' + foundUser.id, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
    // window.location.href = './obrigado';
  };
  const [form, setForm] = React.useState({
    username: '',
    senha: '',
  });
  const username = form.username;
  const password = form.password;

  const filtro = (clients) => {
    const empresa = clients.username.toLowerCase();
    if (empresa.includes(username) && empresa.senha == password) {
      const retirar1 = document.querySelector('.retirar1');
      retirar1.classList.add('sumir');
      const retirar2 = document.querySelector('.retirar2');
      retirar2.classList.add('sumir');
      const retirar3 = document.querySelector('.retirar3');
      retirar3.classList.add('sumir');
      const retirar4 = document.querySelector('.retirar4');
      retirar4.classList.add('sumir');
      return empresa;
    }
  };

  function handleClick(event) {
    event.preventDefault();
    const dadosUser = allUsers.filter(filtro);

    setFoundUser(dadosUser[0]);
  }
  console.log(foundUser);
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <main className="login">
        <Link to="/">
          <div className="logo-white"></div>
        </Link>
        <h1 className="titulo-form">Seja bem-vindo ao Nicho!</h1>

        <form onSubmit={handleClick} className="formulario">
          <input
            id="username"
            value={form.username}
            placeholder="username"
            type="text"
            onChange={handleChange}
            className="retirar3"
          />
          <input
            id="senha"
            placeholder="senha"
            type="password"
            value={form.senha}
            onChange={handleChange}
            className="retirar4"
          />
          <button className="retirar1">LOGIN</button>
          <span className="register">
            <Link className="retirar2" to="/signup">
              Signup
            </Link>
          </span>
        </form>

        {foundUser && (
          <div className="editar">
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder={foundUser.username}
                {...register('username', { required: true })}
              />
              <input
                type="password"
                placeholder={foundUser.senha}
                {...register('senha', { required: true })}
              />
              <input
                placeholder={foundUser.empresa}
                {...register('empresa', { required: true })}
              />
              <textarea
                placeholder={foundUser.sobre}
                {...register('sobre', { required: true })}
              ></textarea>
              <input
                placeholder={foundUser.telefone}
                {...register('telefone')}
              />
              <input placeholder={foundUser.website} {...register('website')} />
              <input
                placeholder={foundUser.endereco}
                {...register('endereco', { required: true })}
              />
              <button>EDITAR</button>
            </form>
          </div>
        )}
      </main>
    </>
  );
};
export default Login;

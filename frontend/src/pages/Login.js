import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

function Login({ history }) {

  const [username, setUsername] = useState('');

  async function handleSubmit (e){
    e.preventDefault();

    const response = await api.post('/devs', {
      username: username
    });

    alert(response);

    history.push('/main');
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <img src={logo} alt="tindev"/>
      <input 
        type="text" placeholder="Informe seu usúario do Github"
        alt="logo"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
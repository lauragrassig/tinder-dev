import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

function Login() {

  const [username, setUsername] = useState('');

  function handleSubmit (e){
    e.preventDefault();

    alert(username);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <img src={logo} alt="tindev"/>
      <input 
        type="text" placeholder="Informe seu usúario do Github"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
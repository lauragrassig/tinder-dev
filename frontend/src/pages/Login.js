import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

function Login() {
  return (
    <div className="login-container">
      <form>
      <img src={logo} alt="tindev"/>
      <input type="text" placeholder="Digite seu usúario do Github"/>
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
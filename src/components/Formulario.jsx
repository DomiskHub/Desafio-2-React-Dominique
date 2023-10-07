import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form className="form">
        <div className="form-name">
          <label htmlFor="name">Ingresa tu nombre:</label>
          <input type="name" id="name" />
        </div>
        <div className="form-email">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-password">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <div className="confirm-password">
          <label htmlFor="password">Confirma tu contraseña:</label>
          <input type="password" id="password" />
        </div>
        <div className="btn">
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

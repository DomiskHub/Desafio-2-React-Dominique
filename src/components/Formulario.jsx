import React from "react";
import { useState } from "react";
import { regexName, regexEmail } from "../utils/utils";
import Alert from "./Alert";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [correct, setCorrect] = useState(false);
  const [show, setShow] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if (!regexName(name)) {
      setError("* El nombre contiene caracteres inválidos.");
      return;
    }

    if (!regexEmail(email)) {
      setError("* El correo no es válido.");
      return;
    }

    if (password !== confirm) {
      setCorrect(false);
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    setShow(true);
  };

  const closeAlert = () => {
    setName("");
    setEmail("");
    setError("");
    setConfirm("");
    setPassword("");
    setShow(false);
  };

  return (
    <div>
      <form className="form" onSubmit={login}>
        <div className="form-name">
          <label htmlFor="name"></label>
          <input type="name" id="name" placeholder="Ingresa tu nombre" required onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="form-email">
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Ingresa tu email" required onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-password">
          <label htmlFor="password"></label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" required onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="confirm-password">
          <label htmlFor="password"></label>
          <input type="password" id="psw-Confirm" placeholder="Confirma tu contraseña" required onChange={(e) => setConfirm(e.target.value)} value={confirm} />
        </div>
        <div className="btn">
          <button type="submit">Registrarse</button>
          <p className="error">{error}</p>
          <p>{correct}</p>
        </div>
      </form>
      <Alert show={show} name={name} email={email} close={closeAlert}></Alert>
    </div>
  );
};
export default Formulario;

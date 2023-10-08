import { register } from "../utils/utils";

const Alert = ({ show, close, name, email }) => {
  const submitForm = () => {
    register(name, email);
    close();
  };

  return (
    <div className={`alert ${show ? "show" : ""}`}>
      <div className="content">
        <h2> 🎉¡ Felicidades {name} !🎉</h2>
        <h3>Registro exitoso.</h3>
        <p>¿ Deseas recibir informacion por email ?</p>
        <div className="button-row">
          <button onClick={submitForm}>Aceptar</button>
          <button className="secondary-btn" onClick={close}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;

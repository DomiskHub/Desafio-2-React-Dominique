import React from "react";

const SocialButton = ({ facebook, github, linkedin }) => {
  return (
    <div>
      <div>
        <h2>Crea una cuenta</h2>
      </div>
      <div className="social-button">
        <p className="icon">{facebook}</p>
        <p className="icon">{github}</p>
        <p className="icon">{linkedin}</p>
      </div>
      <p>O usa tu email para registrarte</p>
    </div>
  );
};

export default SocialButton;

import React from "react";

const SocialButton = ({ facebook, github, linkedin }) => {
  return (
    <div>
      <div>
        <h2>Crea una cuenta</h2>
      </div>
      <div className="social-button">
        <div className="icon">{facebook}</div>
        <div className="icon">{github}</div>
        <div className="icon">{linkedin}</div>
      </div>
      <p>O usa tu email para registrarte</p>
    </div>
  );
};

export default SocialButton;

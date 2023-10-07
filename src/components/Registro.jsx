import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Registro = () => {
  return (
    <div className="login-form">
      <SocialButton
        facebook={<FontAwesomeIcon icon={faFacebookF} />}
        github={<FontAwesomeIcon icon={faGithub} />}
        linkedin={<FontAwesomeIcon icon={faLinkedin} />}
      ></SocialButton>
      <Formulario></Formulario>
    </div>
  );
};

export default Registro;

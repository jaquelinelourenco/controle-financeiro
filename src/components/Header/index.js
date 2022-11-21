import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-ngcash-branco.88c5860.svg";

const Header = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

  return (
    <C.Container>
      <C.Header>
        <img onClick={goToHome} src={Logo}/>
        <C.Title>Controle Financeiro</C.Title>
        <button onClick={goToHome} type="button" class="btn btn-danger">Log-Out</button>
      </C.Header>
    </C.Container>
  );
};

export default Header;

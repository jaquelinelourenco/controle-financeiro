import React from 'react';
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-ngcash-branco.88c5860.svg";

const Home = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
      navigate("/login")
    }

    const goToCadastro = () => {
        navigate("/cadastro")
    }
  return (
    <div>
        <C.ContainerHome>
            <h2>Controle Financeiro</h2>
            <img src={Logo}/>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={goToLogin} type="button" class="btn btn-success">Login</button>
                        <button onClick={goToCadastro} type="button" class="btn btn-secondary">Cadastro</button>
            </form>
        </C.ContainerHome>
    </div>
  );
}

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../Login/styles";
import { BodyCadastro, FormInput } from "./styles";
import Logo from "../../assets/logo-ngcash-branco.88c5860.svg";

const Cadastro = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
      navigate("/login")
    }

    const goToHome = () => {
        navigate("/")
      }

    return(
        <div>
            <Container>
                <img onClick={goToHome} src={Logo}/>
                <h4>Tela Cadastro</h4> 
            </Container>
            <BodyCadastro>
                <form>
                    <FormInput>
                        <div class="form-row">
                            <div class="col">
                                <label for="inputName">User name</label>
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div class="col">
                                <label for="inputName">Last name</label>
                                <input type="text" class="form-control" placeholder="Last name" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">E-mail</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Brasília</option>
                                    <option>São Paulo</option>
                                    <option>Rio de Janeiro</option>
                                    <option>Salvador</option>
                                    <option>Belo Horizonte</option>
                                </select>
                            </div>
                        </div>
                    </FormInput>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button onClick={goToLogin} type="submit" class="btn btn-success">Sign in</button>
                </form>
            </BodyCadastro>
        </div>
    )
}

export default Cadastro
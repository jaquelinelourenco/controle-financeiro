import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const RouterWrapp = () => {
    return(
        <Routes>
            <Route path="/"
                element = {<Home/>}
            />
            <Route path="/login"
                element = {<Login/>}
            />
            <Route path="/cadastro"
                element = {<Cadastro/>}
            />
            <Route path="*"
                element = {
                    <iframe src="https://giphy.com/embed/3osxY9kuM2NGUfvThe"
                        width="100%" height="400" frameBorder="0" allowFullScreen>
                    </iframe>
                }
            />
        </Routes>
    )
}

export default RouterWrapp
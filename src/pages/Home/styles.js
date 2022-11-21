import styled from "styled-components";

export const ContainerHome = styled.div `
    color: white;
    background-color: black;
    height: 100vh;
    width: 100vh;
    position: fixed;
    display: grid;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    box-shadow: 3px 3px 3px 3px #5F6B6B;
    margin: 0px 50% 0px 25%;
    padding: 0px;

    img {
        display: flex;
        justify-content: start;
        align-items: start;
    }

    form {
        padding: 0px;

        button {
            margin: 5px;
        }
    }
`

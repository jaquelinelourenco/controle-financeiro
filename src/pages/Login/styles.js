import styled from "styled-components";

export const Container = styled.div `
    color: white;
    background-color: black;
    height: 80px;
    width: 100vw;
    position: fixed;
    padding: 15px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    box-shadow: 3px 3px 3px 3px #5F6B6B;
    
    img {
        height: 80px;
        width: 80px;
        cursor: pointer;
        display: flex;
        justify-content: start;
        align-items: start;
    }
`
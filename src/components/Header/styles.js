import styled from "styled-components";

export const Container = styled.div`
  height: 145px;
  text-align: center;
  background: black;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    img {
      cursor: pointer;
      width: 80px;
      height: 80px;
    }
`;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;
`;

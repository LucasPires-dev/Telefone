import styled from "styled-components";

export const Aside = styled.aside`
    background-color: #2c3e50;
    grid-column: 1 / span 4;
    height: 100vh;
    padding: 16px;
    color: #fff;
    border-radius: 8px;
`

export const Campo = styled.input`
    width: 100%;
    border-radius: 16px;
    padding: 6px 8px;
    margin-bottom: 24px;
    border: none;
`
export const Info = styled.span`
    display: block;
    font-size: 16px;
    margin-bottom: 16px;
`
export const BotaoAdicionar = styled.button`
    border-radius: 50%;
    width: 56px;
    height: 56px;
    background-color: #1abc9c;
    border: none;
    color: white;
    font-size: 32px;
    position: fixed;
    bottom: 16px;
`
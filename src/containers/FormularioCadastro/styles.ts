import styled from "styled-components";

export const Form = styled.form`
    width: 400px;
    padding: 24px;
    background-color: #fff;
    color: #2c3e50;
    border-radius: 16px;

    nav {
        display: flex;
        justify-content: center;
    }
`
export const Descricao = styled.p`
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
`

export const Legenda = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
`

export const Campo = styled.input`
    width: 100%;
    margin-bottom: 16px;
    padding: 6px 8px;
    border-radius: 4px;
`

export const BotaoCadastar = styled.button`
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border-radius: 6px;
    margin-top: 32px;
    margin-right: 8px;
`

export const BotaoCancelar = styled.button`
    padding: 8px 16px;
    background-color: red;
    color: #fff;
    border-radius: 6px;
    margin-top: 32px;
`
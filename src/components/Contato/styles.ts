import styled from "styled-components";

export const Card = styled.li`
    color: #2c3e50;
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 8px;

    span {
        display: block;
    }
`
export const NomeContato =styled.span`
    font-weight: bold;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1.5px solid #2c3e50;
    display: flex !important;
    justify-content: space-between;
    width: 100%;

    a {
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    }

`

export const NumeroContato =styled.span`
`
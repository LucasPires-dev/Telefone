import styled from "styled-components";

export const Board = styled.div`
    width: 100%;
    grid-column: 5 / span 8;
    background-color: #ecf0f1;
    border-radius: 8px;
    padding: 16px;

div {
    height: calc(100vh - 90px);
     display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    div:first-of-type  {
        height: 420px;
    }
}
`
export const ContainerTel = styled.div`
    max-width: 208px;
    width: 100%;
`

export const DisplayNumber = styled.input`
    width: 100%;
    margin-bottom: 32px;
    padding: 8px;
`

export const ContainerBotoesTel = styled.div`
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
`

export const BotaoNumeral = styled.button`
    background-color: #3498db;
    color: white;
    width: 65px;
    height: 64px;
`

export const BotaoLigar = styled.button`
    width: calc(100% - 32px);
    background-color: #e74c3c;
    color: #fff;
    padding: 8px;
    margin: 0
     auto;
    margin-top: 32px;

`
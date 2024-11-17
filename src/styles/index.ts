import {styled} from 'styled-components'

export const Container = styled.div`
    max-width: 960px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
`
export const Titulo = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 32px;
`
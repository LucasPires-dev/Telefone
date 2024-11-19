import React, { FormEvent, useEffect, useState } from "react"
import { Titulo } from "../../styles"
import { BotaoLigar, BotaoNumeral, ContainerBotoesTel, ContainerTel, DisplayNumber } from "./styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"

const Telefone = () => {

    const [numero, setNumero] = useState('')
    const {itens} = useSelector((state: RootReducer)=> state.contatos)


    const validaNumero = (evento: React.ChangeEvent<HTMLInputElement>) =>{
      
        const numeroDigitado = evento.target.value
        console.log(numeroDigitado)
        setNumero(numeroDigitado)
    }

    const addNumero  = ( numeroDigitado: string) => {

        setNumero(`${numero}${numeroDigitado}`)
    }

    return (
        <>
            <Titulo>Telefone</Titulo>
           <div>
           <div>
                <ContainerTel>
                    <DisplayNumber type="tel" onChange={validaNumero} value={numero}/>
                    <ContainerBotoesTel>
                        <BotaoNumeral onClick={() => addNumero('1')}>1</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('2')}>2</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('3')}>3</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('4')}>4</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('5')}>5</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('6')}>6</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('7')}>7</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('8')}>8</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('9')}>9</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('*')}>*</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('0')}>0</BotaoNumeral>
                        <BotaoNumeral onClick={() => addNumero('#')}>#</BotaoNumeral>
                    </ContainerBotoesTel>
                    <BotaoLigar>Ligar</BotaoLigar>
                </ContainerTel>
            </div>
           </div>
        </>
    )
}

export default Telefone

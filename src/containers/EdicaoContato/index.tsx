import React, { FormEvent, useEffect, useState } from "react"
import { Titulo } from "../../styles"
import { BotaoExcluir, Campo, Descricao, Form, Legenda, BotaoCancelar, BotaoSalvar } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useNavigate } from "react-router-dom"
import { editar, excluir } from "../../store/reducers/contatos"
import { editando } from "../../store/reducers/contatoEditando"

const EdicaoContato = () => {
//     const {itens} = useSelector((state: RootReducer)=> state.contatos )
    const {valor} = useSelector((state: RootReducer) => state.contatoEditando)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        setNome(valor.nome)
        setNumero(valor.numero)
    }, [valor])

    const [nome, setNome] = useState(valor.nome)
    const [numero, setNumero] = useState(valor.numero)

    const finalizarEdicao = (evento: FormEvent) => {
        evento.preventDefault()
        const contato = {
            id: valor.id,
            nome: nome,
            numero: numero
        }
        console.log(contato)

        dispatch(editar(contato))

    }

    const excluirContato = () => {
        dispatch(excluir(valor.id))
        dispatch(editando(false))
        navigate('/')
    }

    const cancelarEdicao = () => {
        dispatch(editando(false))
        navigate('/')
    }

    return (
        <>
            <Titulo>Editar contato</Titulo>
            <div>
                <Form >
                    <Descricao>Editando contato</Descricao>
                    <Legenda htmlFor="nome">Nome</Legenda>
                    <Campo type="text" id="nome" onChange={(evento) => setNome(evento.target.value)} value={nome}/>
                    <Legenda htmlFor="numero">Número</Legenda>
                    <Campo type="number" id="numero" onChange={(evento) => setNumero(evento.target.value)} value={numero}/>
                    <nav>
                        <BotaoSalvar type="submit" onClick={finalizarEdicao}>Salvar</BotaoSalvar>
                        <BotaoExcluir type="button" onClick={excluirContato}>Excluir</BotaoExcluir>
                        <BotaoCancelar type="button" onClick={cancelarEdicao}>Cancelar</BotaoCancelar>
                    </nav>
                </Form>
            </div>
        </>
    )
}

export default EdicaoContato 
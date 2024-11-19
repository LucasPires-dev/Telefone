import { useDispatch, useSelector } from "react-redux"
import Contato from "../../components/Contato"
import { Titulo } from "../../styles"
import { Aside, BotaoAdicionar, Campo, Info } from "./styles"
import { RootReducer } from "../../store"
import { useNavigate } from "react-router-dom"
import { cadastrando } from "../../store/reducers/cadastrando"
import { alterarTermo } from "../../store/reducers/filtro"
import React, { useState } from "react"

type Props = {
    ativarBotaoAdicionar: boolean
}

const ListaDeContatos = ({ativarBotaoAdicionar}: Props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [termo, setTermo] = useState('')
    
    const {itens} = useSelector((state:RootReducer )=> state.contatos)
    const {valor} = useSelector((state:RootReducer )=> state.cadastrando)


    const irParaCadastro = () => {
        console.log(valor)
        dispatch(cadastrando(true))
        navigate('cadastrar')
    }

    const pesquisarContatos = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setTermo(evento.target.value)
        dispatch(alterarTermo(evento.target.value))
    }

     const termoParaFiltrar = useSelector((state: RootReducer)=> state.filtro.termo)

    const itensFiltrados = () => {
        if(termo !== ''){
            return itens.filter(item  => item.nome.toLowerCase().includes(termoParaFiltrar.toLowerCase()))
        }else {
            return itens
        }
    }

    return (
        <Aside>
            <Titulo>Contatos</Titulo>
            <Campo type="text" placeholder="Pesquisar contato" onChange={pesquisarContatos} value={termo}/>
            <Info>{itensFiltrados().length} contatos salvos</Info>
            <ul>
                {itensFiltrados().map((item) => <Contato id={item.id} nome={item.nome} numero={item.numero}/>)}
            </ul>
            {ativarBotaoAdicionar && <BotaoAdicionar type="button" onClick={irParaCadastro}>+</BotaoAdicionar>}
        </Aside>    
    )
}

export default ListaDeContatos
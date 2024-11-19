import { FormEvent, useEffect, useState } from "react"
import { Titulo } from "../../styles"
import { BotaoCadastar, BotaoCancelar, Campo, Descricao, Form, Legenda } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { adicionar } from "../../store/reducers/contatos"
import { RootReducer } from "../../store"
import { useNavigate } from "react-router-dom"
import { cadastrando } from "../../store/reducers/cadastrando"

const FormularioCadastro = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const navigate = useNavigate()

    const [numeroDigitado, setNumeroDigitado] = useState('')
    const [ehCadastrado, setEhCadastrado] = useState(false)

    useEffect(() => {
        if (itens.filter(item => item.numero === numero).length === 0) {
            setEhCadastrado(false)
        } else {
            setEhCadastrado(true)
        }
    }, [numeroDigitado])

    const dispatch = useDispatch()
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')

    const CadastrarContato = (evento: FormEvent) => {

        const geradorDeId = (): number => {
            const ids = itens.map(contato => contato.id)
            const maiorId = Math.max(...ids)
            const idValido = maiorId + 1
    
            return idValido
        }

        const contato = {
            id: geradorDeId(),
            nome: nome,
            numero: numero
        }
        evento.preventDefault()
        console.log(contato)
        dispatch(adicionar(contato))
        dispatch(cadastrando(false))
        navigate('/')

    }

    const cancelarCadastrado = () => {
        dispatch(cadastrando(false))
        navigate('/')
    }

    return (
        <>
            <Titulo>Telefone</Titulo>
            <div>
                <Form onSubmit={CadastrarContato}>
                    <Descricao>Adicionar contato</Descricao>
                    <Legenda htmlFor="nome">Nome</Legenda>
                    <Campo type="text" id="nome" onChange={(evento) => setNome(evento.target.value)} />
                    <Legenda htmlFor="numero">Número</Legenda>
                    <Campo type="tel" id="numero" onChange={(evento) => setNumero(evento.target.value)} />
                    <nav>
                        <BotaoCadastar type="submit">Cadastrar</BotaoCadastar>
                        <BotaoCancelar onClick={cancelarCadastrado}>Cancelar</BotaoCancelar>
                    </nav>
                </Form>
            </div>
        </>
    )
}

export default FormularioCadastro
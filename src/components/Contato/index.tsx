import { Link } from "react-router-dom"
import { Card, NomeContato, NumeroContato } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { adicionar, editando } from "../../store/reducers/contatoEditando"
import { RootReducer } from "../../store"

type Contato = {
    id: number
    nome: string
    numero: string
}

const Contato = ({id, nome, numero}: Contato) => {
    const {estaEditando} = useSelector((state: RootReducer) => state.contatoEditando)
    const cadastrandoStatus = useSelector((state: RootReducer) => state.cadastrando.valor)


    const dispatch = useDispatch()

    const editarContato = () => {
        dispatch(adicionar({id: id ,nome: nome, numero: numero}))
        dispatch(editando(true))
    } 

    const numeroDocontato = () => {
        if(numero.length === 8) return `${numero.split('').slice(0,4).join('')}-${numero.split('').slice(4,10).join('')}`
        if(numero.length === 11) return `(${numero.split('').slice(0,2).join('')}) ${numero.split('').slice(2,7).join('')}-${numero.split('').slice(7,12).join('')}`
        if(numero.length === 13) return `+${numero.split('').slice(0,2).join('')} ${numero.split('').slice(2,4).join('')} ${numero.split('').slice(4,9).join('')}-${numero.split('').slice(9,14).join('')}`
        else return numero
    }

    return (
        <Card>
            <NomeContato>{nome}<Link onClick={editarContato} to={!estaEditando && !cadastrandoStatus ? "editar": "" }>...</Link></NomeContato>
            <NumeroContato>{numeroDocontato()}</NumeroContato>
        </Card>
    )
}

export default Contato
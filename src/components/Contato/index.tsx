import { Card, NomeContato, NumeroContato } from "./styles"

type Contato = {
    nome: string
    numero: string
}

const Contato = ({nome, numero}: Contato) => {
    return (
        <Card>
            <NomeContato>Lucas </NomeContato>
            <NumeroContato>123456789</NumeroContato>
        </Card>
    )
}

export default Contato
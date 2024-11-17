import Contato from "../../components/Contato"
import { Titulo } from "../../styles"
import { Aside, Campo, Info } from "./styles"

const ListaDeContatos = () => {
    return (
        <Aside>
            <Titulo>Contatos</Titulo>
            <Campo type="text" placeholder="Pesquisar contato"/>
            <Info>N contatos salvos</Info>
            <ul>
                <Contato nome="Lucas" numero="123456789"/>
            </ul>
        </Aside>    
    )
}

export default ListaDeContatos
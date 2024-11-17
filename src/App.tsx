import ListaDeContatos from "./containers/ListaDeContatos";
import Telefone from "./containers/Telefone";
import { Container } from "./styles";
import GlobalStyle from "./styles/GlobalStyle";


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ListaDeContatos />
        <Telefone />
      </Container>
    </>
  );
}

export default App;

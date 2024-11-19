import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormularioCadastro from "./containers/FormularioCadastro";
import ListaDeContatos from "./containers/ListaDeContatos";
import Telefone from "./containers/Telefone";
import { Board } from "./containers/Telefone/styles";
import { Container } from "./styles";
import GlobalStyle from "./styles/GlobalStyle";
import EdicaoContato from "./containers/EdicaoContato";

const rotas = createBrowserRouter([
  {
    path: '',
    element: <>
      <ListaDeContatos ativarBotaoAdicionar={true}/>
        <Board>
          <Telefone />
        </Board>
    </>
  }, 
  {
    path: 'cadastrar',
    element: <>
      <ListaDeContatos ativarBotaoAdicionar={false} />
        <Board>
          <FormularioCadastro />
        </Board>
    </>
  },
  {
    path: 'editar',
    element: <>
      <ListaDeContatos ativarBotaoAdicionar={false} />
        <Board>
          <EdicaoContato />
        </Board>
    </>
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  );
}

export default App;

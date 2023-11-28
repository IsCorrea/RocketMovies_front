import { FiPlus } from 'react-icons/fi'
import { Container, Content, Button } from "./styles"

import { Header } from "../../components/Header"
import { Note } from "../../components/Note";

export function Home() {

  return (
    <Container>
      <Header />

      <div>
        <h1>Meus Filmes</h1>
        <Button><FiPlus /> Adicionar filme</Button>
      </div>

      <main>
        <Content>

          <Note></Note>
          <Note></Note>
          <Note></Note>
          <Note></Note>
        </Content>
      </main>
    </Container>
  )
}
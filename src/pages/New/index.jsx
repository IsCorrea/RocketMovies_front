import { FaArrowLeft } from "react-icons/fa";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  return(
    <Container>
      <Header />

      <ButtonText title="Voltar" icon={ FaArrowLeft } />

      <main>
        <Content>
          <h1>Novo Filme</h1>
          <div>
            <Input
              placeholder="Título"
              type="text"
            />
            <Input
              placeholder="Sua nota (0 a 5)"
              type="number"
            />
          </div>

          <Textarea
            placeholder="Observações"
          />

          <h2>Marcadores</h2>
          <div id="tags-wrapper">
            <NewTag 
              value={"Ficção"}
            />
            <NewTag 
              isNew
              placeholder="Novo Marcador"
            />
          </div>

          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações"/>
          </div>
        </Content>
      </main>
    </Container>
  )
}
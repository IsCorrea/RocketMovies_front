import { FaArrowLeft } from "react-icons/fa";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from './styles'
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText title="Voltar" icon={ FaArrowLeft } />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/iscorrea.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={ FiUser }
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={ FiMail }
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={ FiLock }
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={ FiLock }
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}
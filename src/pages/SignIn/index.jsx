import { useState } from 'react'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "../SignIn/styles"
import { useAuth } from '../../hooks/auth'


export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Log In</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={ FiMail }
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={ FiLock }
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Sign In"
          onClick={handleSignIn}
        />

        <a href='/'>Create account</a>
      </Form>

      <Background />

    </Container>

  )
}
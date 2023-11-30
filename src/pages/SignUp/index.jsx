import { api } from '../../services/api';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FaArrowLeft } from "react-icons/fa";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const navigate = useNavigate();

  function handleSignUp() {
    if (! name || ! email || ! password) {
      alert("Please, fill all fields")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("User successfully created!");
      //navigate('/');
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("The user was not created.");
      }
    })
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Create account</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={ FiUser }
          onChange={e => setName(e.target.value)}
        />

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
          title="SignUp"
          onClick={handleSignUp}
        />

        <a href='/'><FaArrowLeft/>Back to Sign In</a>
      </Form>

      <Background />

    </Container>

  )
}
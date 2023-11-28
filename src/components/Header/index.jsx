import { Container, Profile, Brand } from './styles';
import { Input } from '../Input';

export function Header() {
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div>
          <strong>Isabella Correa</strong>
          <button>sair</button>
        </div>

        <img src="https://github.com/iscorrea.png" alt="" />
      </Profile>
    </Container>
  )
}
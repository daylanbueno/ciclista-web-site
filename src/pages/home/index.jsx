import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Instruction } from "../../components/Instruction/inde";
import { Main } from "../../components/Main";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Instruction />
      <About />
    </Container>
  );
}

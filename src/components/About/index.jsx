import { Typography } from "@mui/material";
import { Container, Contant } from "./styles";

export function About() {
  return (
    <Container id="about">
      <Contant>
        <Typography className="title" variant="h3">
          Sobre o Identidade do ciclista
        </Typography>
        <Typography variant="subtitle1">
          A Identidade do Ciclista é uma aplicação dedicada a aprimorar a
          segurança dos ciclistas, oferecendo uma carteirinha digital inovadora
          e eficiente. Com um simples QR code, os ciclistas têm acesso imediato
          a informações cruciais sobre sua saúde e detalhes de contato de
          emergência. Agora, pedalar é mais seguro do que nunca.
        </Typography>
      </Contant>
    </Container>
  );
}

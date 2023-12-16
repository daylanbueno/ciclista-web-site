import { Button, Typography } from "@mui/material";
import { Actions, Container, Content, ContentImg } from "./styles";

import Ciclista from "../../assets/Ciclista.svg";

export function Main() {
  return (
    <Container>
      <Content>
        <div>
          <Typography variant="h3">
            Estamos fazendo algo incrível para os ciclistas
          </Typography>
          <Typography className="subtitle" variant="h4">
            Garanta a sua carteirinha gratuitamente e pedale com total
            segurança.
          </Typography>
        </div>
        <Actions>
          <Button variant="contained" style={{ background: "#FF798B" }}>
            Cadastre-se
          </Button>
        </Actions>
      </Content>
      <ContentImg>
        <img src={Ciclista} alt="Ciclista" />
      </ContentImg>
    </Container>
  );
}

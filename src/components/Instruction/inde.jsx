import { Divider, Typography } from "@mui/material";
import {
  Cicle,
  Container,
  Content,
  Group,
  Info,
  Separator,
  VerticalDivider,
} from "./styles";

export function Instruction() {
  return (
    <Container id="instruction">
      <Typography className="title" variant="h3">
        Como funciona
      </Typography>

      <Content>
        <Group>
          <Info>
            <Typography variant="h4" style={{ color: "#FF798B" }}>
              Informações básicas
            </Typography>
            <Typography variant="subtitle1">
              Para garantir uma identificação rápida e precisa em situações de
              emergência, solicitamos seu nome, email e telefone. Essas
              informações são essenciais para a segurança do ciclista.
            </Typography>
          </Info>
          <Info>
            <Typography variant="h4" style={{ color: "#FF798B" }}>
              Informações de emergência
            </Typography>
            <Typography variant="subtitle1">
              Para assegurar sua segurança, solicitamos um contato de
              emergência, permitindo que os socorristas se comuniquem
              prontamente com pessoas próximas em casos urgentes.
            </Typography>
          </Info>
        </Group>
        <Separator>
          <Cicle />
          <VerticalDivider />
          <Cicle />
          <VerticalDivider />
          <Cicle />
        </Separator>
        <Group>
          <Info className="second-group-info">
            <Typography variant="h4" style={{ color: "#FF798B" }}>
              Informações de saúde
            </Typography>
            <Typography variant="subtitle1">
              Para assegurar uma resposta de emergência eficiente, solicitamos
              informações de saúde, incluindo alergias, medicamentos em uso,
              doenças relevantes e tipo sanguíneo. Esses dados são cruciais para
              fornecer o melhor cuidado em casos de necessidade.
            </Typography>
          </Info>
          <Info>
            <Typography variant="h4" style={{ color: "#FF798B" }}>
              Tudo pronto
            </Typography>
            <Typography variant="subtitle1">
              Ótimo! Sua carteirinha está pronta, e o QR Code deve ser impresso
              para que você possa levá-lo sempre que for pedalar. Aproveite e
              tenha em mãos todas as informações importantes. Boas pedaladas!
            </Typography>
          </Info>
        </Group>
      </Content>
    </Container>
  );
}

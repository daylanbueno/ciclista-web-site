import { Typography } from "@mui/material";

import { Actions, Container } from "./styles";
import Logo from "../../assets/Logo-main.svg";

export function Header() {
  const scrollToElement = (id) => {
    const elemento = document.getElementById(id);
    elemento.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo" />
        <ul>
          <li onClick={() => scrollToElement("instruction")}>
            <Typography>Como funciona</Typography>
          </li>
          <li onClick={() => scrollToElement("about")}>
            <Typography>Sobre</Typography>
          </li>
        </ul>
      </div>

      <Actions>
        <button>
          <Typography>Entrar</Typography>
        </button>
      </Actions>
    </Container>
  );
}

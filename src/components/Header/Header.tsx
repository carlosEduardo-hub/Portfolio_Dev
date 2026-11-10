import { Container } from "./styles";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import Curriculo from "../../assets/Curriculo_Carlos_Eduardo.pdf";

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span className="first-letter">C</span>
        <span>arlos</span>
        <span className="second-letter">E</span>
        <span>duardo</span>
      </HashLink>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? "active" : ""}>
        <HashLink smooth to="#home" onClick={closeMenu}>
          Home
        </HashLink>
        <HashLink smooth to="#sobre" onClick={closeMenu}>
          Sobre mim
        </HashLink>
        <HashLink smooth to="#portfolio" onClick={closeMenu}>
          Portfólio
        </HashLink>
        <HashLink smooth to="#contato" onClick={closeMenu}>
          Contato
        </HashLink>
        <a href={Curriculo} download className="button">
          CV
        </a>
      </nav>

      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}

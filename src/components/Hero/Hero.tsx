import { Container } from "./styles";
import Illustration from "../../assets/image.png";
import { HashLink } from "react-router-hash-link";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p className="hero-enter" style={{ animationDelay: "0ms" }}>
          Olá 👋, eu sou
        </p>
        <h1 className="hero-enter" style={{ animationDelay: "200ms" }}>
          Carlos Eduardo
        </h1>
        <h3 className="hero-enter" style={{ animationDelay: "400ms" }}>
          Desenvolvedor Full-Stack
        </h3>
        <p
          className="small-resume hero-enter"
          style={{ animationDelay: "600ms" }}
        >
          Construo aplicações web e mobile de ponta a ponta e integro IA em produtos reais — do front e da experiência do usuário ao back-end, dados e cloud.
        </p>
        <HashLink
          smooth
          to="#contato"
          className="button hero-enter"
          style={{ animationDelay: "800ms" }}
        >
          Contato
        </HashLink>
      </div>
      <div className="hero-image">
        <img
          className="hero-enter hero-enter--right"
          style={{ animationDelay: "1000ms" }}
          src={Illustration}
          alt="Ilustração de desenvolvedor"
        />
      </div>
    </Container>
  );
}

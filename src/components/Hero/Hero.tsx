import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Illustration from "../../assets/image.png";
import { HashLink } from "react-router-hash-link";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <p>Olá 👋, eu sou</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} animateOnce>
          <h1>Carlos Eduardo</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={400} animateOnce>
          <h3>Desenvolvedor Full-Stack</h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={600} animateOnce>
          <p className="small-resume">
            Construo aplicações web e mobile de ponta a ponta e integro IA em produtos reais — do front e da experiência do usuário ao back-end, dados e cloud.
          </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" delay={800} animateOnce>
          <HashLink smooth to="#contato" className="button">
            Contato
          </HashLink>
        </AnimationOnScroll>
      </div>
      <div className="hero-image">
        <AnimationOnScroll animateIn="animate__fadeInRight" delay={1000} animateOnce>
          <img src={Illustration} alt="Ilustração de desenvolvedor" />
        </AnimationOnScroll>
      </div>
    </Container>
  );
}

import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import perfil from "../../assets/foto.png"
import githubIcon from "../../assets/github-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import NextIcon from "../../assets/next-icon.svg";
import TailwindIcon from "../../assets/tailwind-icon.svg";


export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Me chamo Carlos Eduardo, sou desenvolvedor Full-Stack com experiência em aplicações web de ponta a ponta e integração de IA — React, Next.js, TypeScript, Node.js, APIs REST, PostgreSQL e cloud.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>
            Na Secretaria de Segurança do Piauí (SSP-PI), atuei como Full-Stack (mar/2024–mar/2026) em dashboards de análise, sistema de Boletim de Ocorrência com IA (transcrição e preenchimento automático), backend Fastify com Clean Architecture, Docker, testes com Vitest e automações de PDF/e-mail.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>
            Na FAPEPI (abr/2025–atual), desenvolvo plataforma pública de visualização de dados com Next.js, TanStack Query, Fastify, PostgreSQL em Docker e fluxos ETL com Airflow.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            Sou cofundador e desenvolvedor do SaaS Soul, plataforma de estudos com IA — arquitetura full-stack, autenticação, pagamentos, infraestrutura, analytics, LGPD e funcionalidades baseadas em IA. Também entreguei sistemas para a Pós-graduação em Ciência da Computação da UFPI. Formação: Ciência da Computação (UFPI).
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>
        <p className="skills-note">
          Também trabalho com Fastify, NestJS, PostgreSQL, Drizzle ORM, Docker, AWS, Nginx, Vitest/Jest, SDKs de IA/LLMs e n8n.
        </p>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={NextIcon} alt="Next.js" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={gitIcon} alt="Git" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <img src={htmlIcon} alt="HTML" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
            <img src={cssIcon} alt="CSS" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
            <img src={TailwindIcon} alt="Tailwind CSS" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <img src={nodeIcon} alt="Node.js" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="TypeScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <img src={githubIcon} alt="GitHub" />
          </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={perfil} alt="Foto de perfil de Carlos Eduardo" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

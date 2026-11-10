import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import perfil from "../../assets/foto.jpg";
import githubIcon from "../../assets/github-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import NextIcon from "../../assets/next-icon.svg";
import TailwindIcon from "../../assets/tailwind-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";
import postgresqlIcon from "../../assets/postgresql-icon.svg";
import nestjsIcon from "../../assets/nestjs-icon.svg";
import awsIcon from "../../assets/amazonaws-icon.svg";
import pythonIcon from "../../assets/python.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import expoIcon from "../../assets/expo-icon.svg";

const skills = [
  { src: reactIcon, alt: "React" },
  { src: expoIcon, alt: "React Native / Expo" },
  { src: NextIcon, alt: "Next.js" },
  { src: typescriptIcon, alt: "TypeScript" },
  { src: jsIcon, alt: "JavaScript" },
  { src: nodeIcon, alt: "Node.js" },
  { src: nestjsIcon, alt: "NestJS" },
  { src: TailwindIcon, alt: "Tailwind CSS" },
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: postgresqlIcon, alt: "PostgreSQL" },
  { src: dockerIcon, alt: "Docker" },
  { src: awsIcon, alt: "AWS" },
  { src: pythonIcon, alt: "Python" },
  { src: gitIcon, alt: "Git" },
  { src: githubIcon, alt: "GitHub" },
  { src: vscodeIcon, alt: "VS Code" },
];

export function About() {
  return (
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
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Na Secretaria de Segurança do Piauí (SSP-PI), atuei como Full-Stack em dashboards de análise, sistema de Boletim de Ocorrência com IA (transcrição e preenchimento automático), backend Fastify com Clean Architecture, Docker, testes com Vitest e automações de PDF/e-mail.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.5 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Na FAPEPI, desenvolvo plataforma pública de visualização de dados com Next.js, TanStack Query, Fastify, PostgreSQL em Docker e fluxos ETL com Airflow.
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
          Também trabalho com Fastify, Drizzle ORM, Nginx, Vitest/Jest, SDKs de IA/LLMs e n8n.
        </p>
        <div className="hard-skills">
          {skills.map((skill, index) => (
            <div className="hability" key={skill.alt}>
              <ScrollAnimation animateIn="fadeInUp" delay={(0.1 + index * 0.05) * 1000}>
                <img src={skill.src} alt={skill.alt} title={skill.alt} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={perfil} alt="Foto de perfil de Carlos Eduardo" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

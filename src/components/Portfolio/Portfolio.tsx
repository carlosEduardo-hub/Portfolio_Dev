import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Meu portfólio</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Ping-Pong_Dev.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://carloseduardo-hub.github.io/Ping-Pong_Dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ping Pong Dev</h3>
              <p>
                Este é um projeto que implementa um jogo clássico de
                pingue-pongue usando tecnologias web como HTML, CSS e
                JavaScript. O jogo foi construído com Canvas e APIs de animação
                de tela e quadro para criar uma experiência interativa e
                divertida.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Canvas</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Buscador_CEP.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://carloseduardo-hub.github.io/Buscador_CEP/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Buscador de CEP</h3>
              <p>
                Um buscador de CEP em React que utiliza a API do ViaCEP para
                buscar informações de endereços.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Axios</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/LandingADV.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Landing Page Advogado</h3>
              <p>
                Este é um projeto de uma landing page criada para divulgar os
                serviços de um advogado. Foi desenvolvido utilizando HTML, CSS,
                JavaScript e Bootstrap.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Data-listing-interface.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Interface de Listagem de Dados</h3>
              <p>
                Este projeto é uma interface de listagem de dados desenvolvida
                utilizando React, Tailwind CSS e TypeScript. Ele permite listar
                dados obtidos através de uma API de apoio fornecida por um
                arquivo 'server.json'. O projeto inclui funcionalidades de
                exibição dos dados, criação de novos dados, filtragem e
                paginação.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TailwindCss</li>
                <li>Typescript</li>
                <li>React Query</li>
                <li>Radix</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Sistema_PPGCC.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://carloseduardo-hub.github.io/Sistema_PPGCC/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sistema PPGCC</h3>
              <p>
                Sistema feito para auxiliar o Programa de Pós-Graduação em
                Ciência da Computação na Universidade Federal do Piauí. Este
                projeto oferece uma aplicação React com Dashboard,rotas e
                visualização de dados de arquivos Excel (xlsx, xls) em
                diferentes tipos de gráficos.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TailwindCss</li>
                <li>JavaScript</li>
                <li>React-router-dom</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Form-react-Vite-React-TS-.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Simulador de Validação e Transformação de Dados</h3>
              <p>
                Este projeto visa demonstrar um exemplo prático de como
                implementar validação e transformação de dados em formulários
                utilizando React. Ele oferece um ambiente simulado para entender
                como as bibliotecas podem ser utilizadas para gerenciar dados de
                entrada do usuário, validar informações e realizar
                transformações conforme necessário.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TailwindCss</li>
                <li>Typescript</li>
                <li>Hook-Form</li>
                <li>Zod</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Notes_Expert"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://notes-expert-nine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Notas Inteligentes com API para conversão de áudio</h3>
              <p>
                Este projeto é um aplicativo web construído com React,
                TypeScript e Webpack Vite, que permite aos usuários criarem e
                gerenciarem notas, com a funcionalidade adicional de gravação de
                áudio para conversão de texto.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TailwindCss</li>
                <li>Typescript</li>
                <li>API Speech Recognition</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Projeto-DevBurguer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://dev-burguer-kappa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Cardápio de Hamburgueria - Delivery Online</h3>
              <p>
                Este projeto é um cardápio online de hamburgueria desenvolvido
                em HTML, CSS, TailwindCSS e JavaScript. Ele permite que os
                clientes naveguem pelos itens do menu, adicionem-os ao carrinho
                e finalizem o pedido, o qual é enviado diretamente para o
                WhatsApp.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>TailwindCss</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Search_Movies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://search-movies-zeta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Search Movies - Aplicação de Consulta de Filmes</h3>
              <p>
              Esta aplicação é uma ferramenta para consultar filmes e séries, integrada com a API OMDb (Open Movie Database). 
              Desenvolvida com React e Vite, e estilizada com TailwindCSS, a aplicação permite pesquisar filmes e séries, listar resultados, 
              adicionar e remover itens da lista de favoritos.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>TailwindCSS</li>
                <li>OMDb API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Nearby"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Nearby</h3>
              <p>
              Nearby é uma aplicação mobile desenvolvida em React Native com Expo, 
              que permite aos usuários descobrir e utilizar cupons de vantagens em estabelecimentos parceiros. 
              A aplicação oferece recursos como leitura de QR code para resgate de cupons, 
              interação com mapas para localização de estabelecimentos e uma interface amigável para explorar as ofertas disponíveis.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Expo</li>
                <li>Node JS</li>
                <li>Prisma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/Dashboard_NextJS_Shadcn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://dashboard-next-js-shadcn-two.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dashboard Next.js com Shadcn UI e Tailwind CSS</h3>
              <p>
              Este projeto é um dashboard responsivo para Web e Mobile desenvolvido com Next.js, 
              utilizando a biblioteca de componentes Shadcn UI e o framework CSS Tailwind CSS. 
              O objetivo é fornecer uma interface moderna e amigável, seguindo as melhores práticas de desenvolvimento web.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Shadcn UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/in.orbit_Backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>in.orbit(Backend) - Sistema de Gerenciamento de Metas Semanais</h3>
              <p>
              in.orbit é um sistema para criar e controlar metas semanais, com um backend desenvolvido em Node.js utilizando o framework Fastify. 
              A aplicação utiliza PostgreSQL como banco de dados, com o Drizzle ORM para manipulação de dados. 
              O banco é gerenciado por Docker, permitindo fácil configuração e execução do ambiente.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Fastify</li>
                <li>Drizzle ORM</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/carlosEduardo-hub/in.orbit_Frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>in.orbit(Frontend) - Sistema de Gerenciamento de Metas Semanais</h3>
              <p>
              in.orbit é um sistema para criar e controlar metas semanais, este repositório contém o frontend do sistema de gerenciamento de metas semanais in.orbit. 
              Ele é construído com React e utiliza o framework de desenvolvimento web Vite para uma experiência de desenvolvimento rápida e eficiente.
              Dentre as funcionalidades estão o cadastro de novas metas,barra de progresso e listagem de metas.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>Radix UI</li>
                <li>React Query</li>
                <li>React Hook Form</li>
                <li>Zod</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

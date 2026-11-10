import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { featuredSoul, projects } from "../../data/projects";

const soulHost = new URL(featuredSoul.live).host;

function FolderIcon() {
  return (
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Meu portfólio</h2>

      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <article className="featured">
          <div className="featured-preview">
            <a
              className="live-preview"
              href={featuredSoul.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${featuredSoul.ctaLabel} — abrir site ao vivo`}
            >
              <div className="live-preview__chrome" aria-hidden="true">
                <span className="live-preview__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="live-preview__url">{soulHost}</span>
              </div>
              <div className="live-preview__stage">
                <div className="live-preview__scene">
                  <p className="live-preview__eyebrow">Soul te vê. Soul te conhece.</p>
                  <h4>
                    Você estuda muito e ainda{" "}
                    <span>se sente perdido.</span>
                  </h4>
                  <p className="live-preview__copy">
                    Plataforma de estudos com IA.
                  </p>
                  <span className="live-preview__pill">Abrir Soul →</span>
                </div>
              </div>
            </a>
          </div>
          <div className="featured-body">
            <div className="featured-content">
              <h3>{featuredSoul.title}</h3>
              <p>{featuredSoul.description}</p>
              <ul className="featured-highlights">
                {featuredSoul.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="tech-list">
                {featuredSoul.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <a
              className="button featured-cta"
              href={featuredSoul.live}
              target="_blank"
              rel="noreferrer"
            >
              {featuredSoul.ctaLabel}
            </a>
          </div>
        </article>
      </AnimationOnScroll>

      <div className="projects">
        {projects.map((project) => (
          <AnimationOnScroll animateIn="animate__flipInX" key={project.title} animateOnce>
            <div className="project">
              <header>
                <FolderIcon />
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      title={project.githubSecondary ? "GitHub frontend" : "GitHub"}
                      aria-label={`${project.title} no GitHub`}
                    >
                      <img src={githubIcon} alt="" />
                      {project.githubSecondary && <span className="link-label">FE</span>}
                    </a>
                  )}
                  {project.githubSecondary && (
                    <a
                      href={project.githubSecondary}
                      target="_blank"
                      rel="noreferrer"
                      title={project.githubSecondaryLabel || "Backend"}
                      aria-label={`${project.title} backend no GitHub`}
                    >
                      <img src={githubIcon} alt="" />
                      <span className="link-label">BE</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      title="Visitar site"
                    >
                      <img src={externalLinkIcon} alt="Visitar site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </Container>
  );
}

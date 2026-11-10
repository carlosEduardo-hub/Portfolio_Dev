import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import soulPreview from "../../assets/soul-preview.png";
import { featuredSoul, projects } from "../../data/projects";

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
              href={featuredSoul.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${featuredSoul.ctaLabel} (abre em nova aba)`}
            >
              <img
                src={soulPreview}
                alt={`Preview da plataforma ${featuredSoul.title}`}
              />
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

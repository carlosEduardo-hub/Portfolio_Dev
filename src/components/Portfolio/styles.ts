import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
  }

  .featured {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 3.2rem;
    align-items: center;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    padding: 2.4rem;
    margin-bottom: 6rem;
    color: #fff;
  }

  .featured-preview {
    a {
      display: block;
      border-radius: 1.2rem;
      overflow: hidden;
      min-height: 44px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      transition: transform 0.25s;
    }

    a:hover img {
      transform: scale(1.02);
    }

    a:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 3px;
    }
  }

  .featured-content {
    h3 {
      font-size: 4rem;
      margin-bottom: 1.6rem;
      color: var(--green);
    }

    p {
      letter-spacing: 0.08rem;
      margin-bottom: 1.6rem;
      max-width: 52ch;
    }

    .featured-highlights {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin: 0 0 2rem;
      padding: 0;

      li {
        position: relative;
        padding-left: 1.6rem;
        letter-spacing: 0.04rem;
        opacity: 0.9;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          background: var(--green);
        }
      }
    }

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.2rem 2rem;
      font-size: 1.4rem;
      opacity: 0.7;
      margin-bottom: 2.4rem;
    }

    .featured-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 1.2rem 3.2rem;
      text-decoration: none;
    }

    .featured-cta:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 3px;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;

    .project {
      padding: 1rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;

          a {
            min-width: 44px;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            color: #fff;
            text-decoration: none;
          }

          a:focus-visible {
            outline: 2px solid var(--green);
            outline-offset: 2px;
            border-radius: 1.2rem;
          }

          .link-label {
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            opacity: 0.85;
          }
        }

        a > img {
          width: 2.6rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.2rem 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .featured {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }

    .featured-content {
      p {
        max-width: none;
      }
    }

    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 4rem;
      margin-bottom: 4rem;
    }

    .featured {
      padding: 1.6rem;
      margin-bottom: 4rem;
    }

    .projects {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .featured-content {
      .featured-cta {
        width: 100%;
      }
    }
  }
`;

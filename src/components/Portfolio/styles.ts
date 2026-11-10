import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
  }

  .featured {
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    overflow: hidden;
    margin-bottom: 6rem;
    color: #fff;
  }

  .featured-preview {
    width: 100%;
    background: #121212;
    overflow: hidden;
    padding: 1.6rem;
  }

  .live-preview {
    display: block;
    width: 100%;
    min-height: 44px;
    border-radius: 1.2rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: #0b0b0f;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.25s ease, transform 0.25s ease;

    &:hover {
      border-color: rgba(35, 206, 107, 0.55);
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 3px;
    }
  }

  .live-preview__chrome {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 0.9rem 1.2rem;
    background: #17171c;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .live-preview__dots {
    display: inline-flex;
    gap: 0.45rem;
    flex-shrink: 0;

    i {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: #3a3a42;
      display: block;

      &:nth-child(1) {
        background: #ff5f57;
      }
      &:nth-child(2) {
        background: #febc2e;
      }
      &:nth-child(3) {
        background: #28c840;
      }
    }
  }

  .live-preview__url {
    flex: 1;
    min-width: 0;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    background: #0f0f14;
    color: rgba(255, 255, 255, 0.72);
    font-size: 1.3rem;
    letter-spacing: 0.02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .live-preview__stage {
    position: relative;
    min-height: 28rem;
    padding: 3.2rem 2.4rem;
  }

  .live-preview--soul .live-preview__stage {
    background:
      radial-gradient(ellipse 70% 60% at 75% 40%, rgba(124, 58, 237, 0.35), transparent 60%),
      radial-gradient(ellipse 50% 45% at 20% 80%, rgba(219, 39, 119, 0.2), transparent 55%),
      linear-gradient(160deg, #09090f 0%, #15101f 55%, #0b0b12 100%);
  }

  .live-preview--fapepi .live-preview__stage {
    background:
      radial-gradient(ellipse 70% 55% at 80% 35%, rgba(1, 111, 185, 0.38), transparent 60%),
      radial-gradient(ellipse 45% 40% at 15% 75%, rgba(35, 206, 107, 0.18), transparent 55%),
      linear-gradient(160deg, #071018 0%, #0d1c28 55%, #0a1218 100%);
  }

  .live-preview__scene {
    max-width: 54rem;

    h4 {
      margin: 1.2rem 0 1.4rem;
      font-size: clamp(2.4rem, 4vw, 3.8rem);
      line-height: 1.15;
      font-weight: 700;
      color: #fff;
    }
  }

  .live-preview--soul .live-preview__scene h4 span {
    background: linear-gradient(90deg, #a78bfa, #f472b6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .live-preview--fapepi .live-preview__scene h4 span {
    background: linear-gradient(90deg, #38bdf8, #23ce6b);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .live-preview__eyebrow {
    display: inline-flex;
    margin: 0;
    padding: 0.45rem 1rem;
    border-radius: 999px;
    font-size: 1.2rem;
    letter-spacing: 0.02em;
  }

  .live-preview--soul .live-preview__eyebrow {
    color: #c4b5fd;
    background: rgba(124, 58, 237, 0.18);
    border: 1px solid rgba(167, 139, 250, 0.35);
  }

  .live-preview--fapepi .live-preview__eyebrow {
    color: #7dd3fc;
    background: rgba(1, 111, 185, 0.22);
    border: 1px solid rgba(56, 189, 248, 0.4);
  }

  .live-preview__copy {
    margin: 0 0 2rem;
    max-width: 48ch;
    font-size: 1.5rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.78);
  }

  .live-preview__pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
  }

  .live-preview--soul .live-preview__pill {
    background: linear-gradient(90deg, #7c3aed, #db2777);
  }

  .live-preview--fapepi .live-preview__pill {
    background: linear-gradient(90deg, #016fb9, #23ce6b);
  }

  .featured-body {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2.4rem;
    padding: 2.4rem;
  }

  .featured-content {
    flex: 1 1 40rem;
    min-width: 0;

    h3 {
      font-size: 4rem;
      margin-bottom: 1.6rem;
      color: var(--green);
    }

    p {
      letter-spacing: 0.08rem;
      margin-bottom: 1.6rem;
      max-width: 70ch;
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
      margin-bottom: 0;
    }
  }

  .featured-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    min-height: 44px;
    padding: 1.2rem 3.2rem;
    text-decoration: none;
  }

  .featured-cta:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
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
      margin-bottom: 4rem;
    }

    .featured-preview {
      padding: 1rem;
    }

    .live-preview__stage {
      min-height: 22rem;
      padding: 2.4rem 1.6rem;
    }

    .live-preview__copy {
      font-size: 1.4rem;
    }

    .featured-body {
      padding: 1.6rem;
      gap: 1.8rem;
    }

    .projects {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .featured-cta {
      width: 100%;
    }

    .live-preview__url {
      font-size: 1.2rem;
    }

    .live-preview__pill {
      width: 100%;
    }
  }
`;


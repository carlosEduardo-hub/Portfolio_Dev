import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);

  @keyframes heroFadeUp {
    from {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes heroFadeRight {
    from {
      opacity: 0;
      transform: translate3d(40px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .hero-enter {
    opacity: 0;
    animation: heroFadeUp 0.8s ease forwards;
  }

  .hero-enter--right {
    animation-name: heroFadeRight;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-enter {
      opacity: 1;
      animation: none;
    }
  }

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 35%;
  }
`

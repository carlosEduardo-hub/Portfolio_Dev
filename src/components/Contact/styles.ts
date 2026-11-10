import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;
  width: 100%;

  header {
    text-align: center;
    padding: 0 1rem;

    h2 {
      text-align: center;
      font-size: 4rem;
      line-height: 1.2;
    }
    p {
      color: var(--green);
      font-weight: 500;
      max-width: 52ch;
      margin: 1.2rem auto 0;
      line-height: 1.5;
    }
  }

  .contacts {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 8rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 24rem;
      max-width: 36rem;
      gap: 1.6rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.4rem;
      transition: background-color 0.25s;
      min-height: 44px;

      img {
        width: 3.6rem;
        flex-shrink: 0;
        filter: brightness(0);
      }
      a {
        color: var(--black);
        font-weight: 500;
        min-width: 0;
        overflow-wrap: break-word;
        word-break: keep-all;
        line-height: 1.35;
        text-align: left;
      }
      &:hover {
        background-color: var(--pink);
        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 960px) {
    margin-top: 12rem;

    header {
      h2 {
        font-size: 3.2rem;
      }
    }

    .contacts {
      flex-direction: column;
      align-items: stretch;
      margin-top: 4rem;
      gap: 1.2rem;

      div {
        width: 100%;
        max-width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        padding: 1.4rem 1.6rem;

        a {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 8rem;

    header {
      padding: 0;

      h2 {
        font-size: 2.6rem;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .contacts {
      margin-top: 3rem;

      div {
        gap: 1.2rem;
        padding: 1.2rem 1.4rem;

        img {
          width: 2.8rem;
        }

        a {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

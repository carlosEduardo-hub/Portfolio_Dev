import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 100%;

  h2 {
    text-align: center;
    margin-bottom: 1.2rem;
    line-height: 1.25;
    padding: 0 1rem;
  }

  .form-hint {
    text-align: center;
    max-width: 52ch;
    width: 100%;
    margin-bottom: 2.4rem;
    padding: 0 1rem;
    opacity: 0.85;
    letter-spacing: 0.04rem;
    line-height: 1.5;
  }

  .form-feedback {
    text-align: center;
    max-width: 52ch;
    letter-spacing: 0.04rem;

    &.success {
      color: var(--green);
      margin-top: 1rem;
    }

    &.error {
      color: var(--pink);
      margin: 0.4rem 0;
    }
  }

  .validation-error {
    color: var(--pink);
    font-size: 1.4rem;
  }

  .whatsapp-alt {
    margin-top: 2rem;
    text-align: center;
    padding: 0 1rem;

    a {
      color: var(--green);
      font-weight: 500;
      text-decoration: underline;
      text-underline-offset: 0.3rem;
    }
  }

  .whatsapp-card {
    margin-top: 3.2rem;
    width: min(60rem, 100%);
    max-width: 100%;
    padding: 2rem 2.4rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 1.4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    box-sizing: border-box;

    p {
      margin: 0;
      max-width: 48ch;
      width: 100%;
      letter-spacing: 0.04rem;
      opacity: 0.9;
      line-height: 1.5;
    }

    .whatsapp-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 1rem 3.2rem;
      text-decoration: none;
      text-transform: uppercase;
      box-sizing: border-box;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: min(60rem, 100%);
    max-width: 100%;

    input,
    textarea {
      width: 100%;
      max-width: 100%;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      background: none;
      border: 1px solid #fff;
      color: white;
      font-weight: 600;
      box-sizing: border-box;

      &::placeholder {
        color: #fff;
      }

      &:focus-visible {
        border-color: var(--green);
        box-shadow: 0 0 0 2px rgba(35, 206, 107, 0.35);
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: vertical;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
      min-height: 44px;
      box-sizing: border-box;

      &:disabled {
        opacity: 0.7;
        cursor: wait;
      }
    }
  }

  @media (max-width: 740px) {
    margin-top: 6rem;

    h2 {
      font-size: 2.4rem;
      padding: 0;
    }

    .form-hint {
      font-size: 1.5rem;
      padding: 0;
      margin-bottom: 2rem;
    }

    form {
      width: 100%;
      gap: 1.2rem;

      input,
      textarea {
        width: 100%;
        padding: 1.2rem 1.6rem;
        font-size: 1.5rem;
      }

      textarea {
        height: 16rem;
      }

      button {
        width: 100%;
        padding: 1.2rem 2rem;
      }
    }

    .whatsapp-card {
      width: 100%;
      margin-top: 2.4rem;
      padding: 1.6rem;

      p {
        font-size: 1.5rem;
      }

      .whatsapp-cta {
        width: 100%;
        padding: 1.2rem 2rem;
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.2rem;
    }

    .form-hint,
    .whatsapp-card p {
      font-size: 1.4rem;
      letter-spacing: 0.02rem;
    }
  }
`;

import { FormEvent, useState } from "react";
import { Container } from "./styles";

const CONTACT_EMAIL = "carloseduardo010616@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988778431&type=phone_number&text=" +
  encodeURIComponent("Olá, Carlos! Vim pelo portfólio e gostaria de conversar.");

type SubmitStatus = "idle" | "submitting" | "succeeded" | "activation" | "error";

type FormSubmitResponse = {
  success?: string | boolean;
  message?: string;
};

function isSuccessful(result: FormSubmitResponse | null) {
  if (!result) return false;
  return result.success === true || result.success === "true";
}

export function Form() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (status === "succeeded") {
    return (
      <Container>
        <h2>Mensagem enviada</h2>
        <p className="form-feedback success">
          Obrigado pelo contato! Vou responder no e-mail informado o mais breve possível.
        </p>
        <p className="whatsapp-alt">
          Preferir falar agora?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Abrir WhatsApp
          </a>
        </p>
      </Container>
    );
  }

  if (status === "activation") {
    return (
      <Container>
        <h2>Ative o formulário</h2>
        <p className="form-feedback success">
          Enviamos um e-mail de ativação para {CONTACT_EMAIL}. Abra a caixa de entrada,
          clique em <strong>Activate Form</strong> e depois envie de novo por aqui.
        </p>
        <p className="whatsapp-alt">
          Enquanto isso, você pode{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            falar no WhatsApp
          </a>
          .
        </p>
      </Container>
    );
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      const result = (await response.json().catch(() => null)) as FormSubmitResponse | null;

      if (isSuccessful(result)) {
        form.reset();
        setStatus("succeeded");
        return;
      }

      const message = result?.message || "";
      if (/activation/i.test(message)) {
        setStatus("activation");
        return;
      }

      throw new Error(message || "Falha no envio");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Não foi possível enviar agora. Confira os campos ou tente novamente em instantes."
      );
    }
  };

  return (
    <Container>
      <h2>Entre em contato a partir do formulário abaixo</h2>
      <p className="form-hint">
        Preencha os campos e envie. A mensagem chega no meu e-mail — sem precisar abrir o WhatsApp.
      </p>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Seu nome"
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
        />

        <input
          placeholder="Seu e-mail"
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
        />

        <input
          placeholder="Assunto"
          id="subject"
          type="text"
          name="_subject"
          required
          autoComplete="off"
        />

        <textarea
          placeholder="Sua mensagem"
          id="message"
          name="message"
          required
        />

        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {status === "error" && (
          <p className="form-feedback error" role="alert">
            {errorMessage}
          </p>
        )}

        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <aside className="whatsapp-card" aria-label="Contato por WhatsApp">
        <p>
          Prefere WhatsApp? Você também pode me chamar por lá — resposta mais rápida para conversas curtas.
        </p>
        <a
          className="button whatsapp-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>
      </aside>
    </Container>
  );
}

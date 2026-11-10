import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import whatsIcon from "../../assets/whatsIcon.svg";
import { Form } from "../Form/Form";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988778431&type=phone_number&text=" +
  encodeURIComponent("Olá, Carlos! Vim pelo portfólio e gostaria de conversar.");

export function Contact() {
  return (
    <Container id="contato">
      <header>
        <h2>Entre em contato comigo</h2>
        <p>
          Pode me escrever pelo formulário, e-mail, telefone ou WhatsApp — escolha o canal que preferir.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="" />
          <a href="mailto:carloseduardo010616@gmail.com">
            carloseduardo010616<wbr />@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="" />
          <a href="tel:+5586988778431">(86) 98877-8431</a>
        </div>
        <div>
          <img src={whatsIcon} alt="" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
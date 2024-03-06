import {Container} from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import whatsIcon from "../../assets/whatsIcon.svg";

export function Footer(){
  return(
    <Container className="footer">
      <a href="/" className="logo">
          <span className="first-letter">C</span>
          <span>arlos</span>
          <span className="second-letter">E</span>
          <span>duardo</span>
      </a>
      <div>
        <p>Todos os Direitos Reservados - 2024 © <img src={reactIcon}/></p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/carlos-eduardo-mendes-de-oliveira/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/carlosEduardo-hub" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a href="https://www.instagram.com/carloseduardo_mo_/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://api.whatsapp.com/send/?phone=5586988778431&type=phone_number" rel="noopener noreferrer" target="_blank">
          <img src={whatsIcon} alt="WhatsApp"/>
        </a>
      </div>
      
    </Container>
  )
}
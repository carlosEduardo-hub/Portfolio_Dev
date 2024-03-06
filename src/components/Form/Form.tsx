import { Container } from "./styles";
import { useForm, ValidationError } from '@formspree/react';

export function Form(){

  const [state, ] = useForm("myyozglw");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // if (!state.valid) {
    //   return;
    // }

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!email || !message) {
      alert("Por favor, preencha ambos os campos de email e mensagem.");
      return;
    }

    const whatsappMessage = `Email: ${email}%0A` +
                            `Mensagem: ${message}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=+5586988778431&text=${whatsappMessage}`;

    window.open(whatsappLink, '_blank');
  };
  
  return(
    <Container>
      <h2>Entre em contato a partir do formulário abaixo</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          className="validationemail"
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          placeholder="Deixe sua mensagem"
          id="message"
          name="message"
        />
        <ValidationError 
          className="validationmessage"
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </Container>
  );
}

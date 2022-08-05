import React, { useRef } from "react"
import emailjs from "emailjs-com";
import { Container, FormEmail , Inputs , InputMessage , ButtonSend} from "./emailStyled";

const Email = () => {
    const form = useRef();


    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_2p8xhrp', 'template_g91hmg5', form.current, 'jKL8IZu730ytJTv88')
            .then((result) => {
                alert("E-mail enviado com sucesso.")
            }, (error) => {
                alert(error.message)
            });
        event.target.reset()
    }



    return (
        <Container>
            <FormEmail ref={form} onSubmit={sendEmail}>
                    <label>Nome</label>
                    <Inputs type="text" name="user_name" placeholder="Nome" />               
                    <label>E-mail</label>
                    <Inputs type="email" name="user_email" placeholder="E-mail" />               
                <label>Mensagem</label>
                <InputMessage name="message" placeholder="Mensagem" />
                <ButtonSend type="submit" value="Enviar" />
            </FormEmail>
        </Container>
    )
}

export default Email
import './contato.scss';
import React from 'react'

export const Contato = () => {
    return (
        <div id="contato">
            <form
                action="https://formsubmit.co/jardeloliveiracontact@gmail.com"
                method="POST"
                class="form"
            >
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" required />
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" required />
                <label for="mensagem">Mensagem</label>
                <textarea name="mensagem" id="mensagem" required></textarea>
                <input type="hidden" name="_captcha" value="false" />
                {/* <input
                    type="hidden"
                    name="_next"
                    value="https://yourdomain.co/obrigado.html"
                /> */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

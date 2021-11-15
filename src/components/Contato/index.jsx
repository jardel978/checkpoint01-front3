import './contato.scss';
import React from 'react'

export const Contato = ({data}) => {

    let listaImput = [];
    let listaPlaceholder = [];
    data && (listaImput = data.imputs);
    data && (listaPlaceholder = data.placeholder);
    
    const campo1 = listaImput[0],
            campo2 = listaImput[1],
                campo3 = listaImput[2],
                    campo4 = listaImput[3];

    const placeh1 = listaPlaceholder[0],
            placeh2 = listaPlaceholder[1],
              placeh3 = listaPlaceholder[2];

            //   console.log(campo1)

    return (
        <div id="contato">
            <h2>{data && (data.texto)}</h2>

            <div className="imagem-email">
                <img class="img-responsive" src={data && (data.imagem)} alt="email" />
            </div>

            <form
                action="https://formsubmit.co/jardeloliveiracontact@gmail.com"
                method="POST"
                class="form"
            >
                <label for={campo1}>{campo1}</label>
                <input type="text" name={campo1} id={campo1} placeholder={placeh1} required />
                
                <label for="email">{campo2}</label>
                <input type="email" name={campo2} id={campo2} placeholder={placeh2} required />
                
                <label for={campo3}>{campo3}</label>
                <textarea name={campo3} id={campo3} placeholder={placeh3} required></textarea>
                <input type="hidden" name="_captcha" value="false" />
                {/* <input
                    type="hidden"
                    name="_next"
                    value="https://yourdomain.co/obrigado.html"
                /> */}
                <button type="submit">{campo4}</button>
            </form>
        </div>
    )
}

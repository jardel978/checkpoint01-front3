import 'reactjs-popup/dist/index.css';
import './projeto.scss';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export const Projeto = ({ projeto, chave }) => {

    const position = 'bottom center';
    const [visibilidade, setVisibilidade] = useState(false);

    let projetoToggle = () => {
        setVisibilidade(!visibilidade);
    }

    return (
        <>
            <article
                key={chave}
                style={{ backgroundImage: `url(${projeto.imagem})` }}
                className="projeto-article"
                onMouseEnter={projetoToggle}
                onMouseLeave={projetoToggle}
            >
                <h2>{projeto.titulo}</h2>

                <Popup
                    trigger={
                        <button type="button" className="button btn-projeto">
                            Saiba Mais
                        </button>
                    }
                    position={position}
                    on={['hover', 'focus']}
                    arrow={position !== 'center center'}
                >
                    <div className="links">
                        <a className="link-projeto" href={projeto.hospedagem} target="_blank" rel="noreferrer">Acessar o Site</a>
                        <br />
                        <a className="link-projeto" href={projeto.projeto} target="_blank" rel="noreferrer">Acessar Repositório</a>
                    </div>
                </Popup>

            </article>
            <div className={`projeto-${visibilidade ? "visivel" : "none"}`}>
                <img src={projeto.imagem2} alt={projeto.titulo} />
                <div className="projeto-conteudo">
                    <p>{projeto.descricao}</p>
                </div>
            </div>
        </>
    )

}

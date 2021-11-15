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
                {/* <p>{projeto.descricao}</p> */}
                <h2>{projeto.titulo}</h2>

                <Popup
                    trigger={
                        <button type="button" className="button">
                            Saiba Mais
                        </button>
                    }
                    position={position}
                    on={['hover', 'focus']}
                    arrow={position !== 'center center'}
                >
                    <div className="links">
                        <a href={projeto.projeto} target="_blank">Acessar Repositório</a>
                        <br />
                        <a href={projeto.hospedagem} target="_blank">Acessar o Site</a>
                    </div>
                </Popup>

            </article>
            <div className={`projeto-${visibilidade ? "visivel" : "none"}`}>
                <img src={projeto.imagem2} alt={projeto.titulo} />
                <div className="projeto-conteudo">
                    <p>{projeto.descricao}</p>
                    {/* <iframe src="https://jardel978.github.io/check-point01Fron02/" scrolling="no" frameborder="no"></iframe> */}
                </div>
            </div>
        </>
    )

}

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

                {/* <div className="example-warper"> */}
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
                    {/* <Card title={position} /> */}
                    <div className="links">
                        <a href={projeto.projeto} target="_blank">Link Git</a>
                        <br />
                        <a href={projeto.hospedagem} target="_blank">Link Vercel</a>
                    </div>
                </Popup>

                {/* </div> */}
            </article>
            <div className={`projeto-${visibilidade ? "visivel" : "none"}`}>
                <h2>Deus é fiel!</h2>
            </div>
        </>
    )

}

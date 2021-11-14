import 'reactjs-popup/dist/index.css';
import './projeto.scss';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

export const Projetos = ({ data }) => {

    const position = 'bottom center';
    const [visibilidade, setVisibilidade] = useState(false);

    let projetoToggle = () => {
        setVisibilidade(!visibilidade);
    }

    return (
        <section id="projetos">
            {
                data && (data.map((item, key) => {
                    return (
                        <article key={key} 
                            style={{ backgroundImage: `url(${item.imagem})`}}
                            onMouseEnter={projetoToggle}
                            onMouseLeave={projetoToggle}
                        >
                            {/* <p>{item.descricao}</p> */}
                            <h2>{item.titulo}</h2>

                            {/* <div className="example-warper"> */}
                            <Popup
                                trigger={
                                    <button type="button" className="button">
                                        Links para {item.titulo}
                                    </button>
                                }
                                position={position}
                                on={['hover', 'focus']}
                                arrow={position !== 'center center'}
                            >
                                {/* <Card title={position} /> */}
                                <div className="links">
                                    <a href="#" target="_blank">{item.projeto}</a>
                                    <br />
                                    <a href="#" target="_blank">{item.hospedagem}</a>
                                </div>
                            </Popup>

                            <div className={`projeto-${visibilidade ? "visivel" : "none"}`}>
                                <h2>Deus é fiel!</h2>
                            </div>

                            {/* </div> */}
                        </article>
                    )
                }))
            }
        </section>
    )
}

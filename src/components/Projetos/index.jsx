import './projeto.scss';

import React from 'react'

export const Projetos = ({ data }) => {

    return (
        <section id="projetos">
            {
                data && (data.map((item, key) => {
                    return (
                        <article key={key}>
                            <p>{item.titulo}</p>
                            <p>{item.imagem}</p>
                            <p>{item.descricao}</p>
                        </article>
                    )
                }))
            }
        </section>
    )
}

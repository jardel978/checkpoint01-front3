import './banner.scss';
import React from 'react'

export const Banner = ({ data }) => {
    return (
        <>
            <section id="sobre-mim">
                <article>
                    <img src={data && ( data.foto )} alt="imagem de perfil" />
                </article>
                <article>
                    <p>{ data && ( data.descricao )}</p>
                </article>
            </section>
        

        </>
    )
}

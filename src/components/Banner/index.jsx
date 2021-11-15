import './banner.scss';
import React from 'react'

export const Banner = ({ data }) => {
    return (
        <>
            <section id="sobre-mim">
                <article className="sobre-mim-img">
                    <div>
                        <img src={data && ( data.foto )} alt="imagem de perfil" />
                    </div>
                </article>
                <article className="descricao">
                    <p>{ data && ( data.titulo )}</p>
                    <p>{ data && ( data.previa )}</p>
                    <p>{ data && ( data.descricao1 )}</p>
                    <p>{ data && ( data.descricao2 )}</p>
                    <p>{ data && ( data.descricao )}</p>
                </article>
            </section>
        

        </>
    )
}

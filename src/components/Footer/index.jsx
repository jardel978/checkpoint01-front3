import './footer.scss';

import React from 'react'

export const Footer = ({ data }) => {
    
    return (
        <footer>
            <div className="box-footer1">
                <p className="direitos">Desenvolvido por Jardel Oliveira</p>
                <p>Trabalho realizado com muito carinho e sede de conhecimento. </p>
                <p>Fazendo parte de mais um dos projetos avaliativos do CTD - Certified Tech Developer oferecido por: </p>
                <a href={data && (data.link1)} target="_blank" rel="noreferrer">{data && (data.empresa1)}</a>
                <a href={data && (data.link2)} target="_blank" rel="noreferrer">{data && (data.empresa2)}</a>
                <a href={data && (data.link3)} target="_blank" rel="noreferrer">{data && (data.empresa3)}</a>
            </div>
            <div className="box-footer2">
                <a href={data && (data.perfil1)} target="_blank" rel="noreferrer"><img src={data && (data.icon1)} alt="icone" /></a>
                <a href={data && (data.perfil2)} target="_blank" rel="noreferrer"><img src={data && (data.icon2)} alt="icone" /></a>
                <a href="#contato" rel="noreferrer"><img src={data && (data.icon3)} alt="icone" /></a>
            </div>
        </footer>
    )
}

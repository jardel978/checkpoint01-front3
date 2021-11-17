import './header.scss';

import React from 'react'

export const Header = ({ data }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg nav-color">
                <div className="container-fluid">
                    <div className="navbar-toggler">
                        <img src={data && (data.logo)} alt="logo" />
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" >
                        <img src={data && (data.logo)} alt="logo" />
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                data && (data.itens.map((item, key) => {
                                    return (
                                        <li key={key} className="nav-item px-2">
                                            <a className="nav-link" href={"#" + (item.replace(" ", "-")).toLowerCase()}>{item}</a>
                                        </li>
                                    )
                                }))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

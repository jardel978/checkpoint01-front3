import './header.scss';

import React from 'react'

export const Header = ({data}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-toggler">
                        <img src={data && (data.logo)} alt="logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" >
                        <img src={data && (data.logo)} alt="logo" />
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                               data && ( data.itens.map((item, key) => {
                                    return (
                                        <li key={key} className="nav-item px-2">
                                            <a className="nav-link" href={(item.replace(" ", "-")).toLowerCase()}>{item}</a>
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

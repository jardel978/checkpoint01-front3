import './header.scss';

import React from 'react'

export const Header = () => {
    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="navbar-toggler">
                        <img src="" alt="logo" />
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" >
                        <img src="" alt="logo" />
                    </div>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item px-2">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

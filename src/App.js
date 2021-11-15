import './App.scss';
import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Projeto } from './components/Projetos/Projeto';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { HelloAnimation } from './components/HelloAnimation';
import { LoadAnimation } from './components/LoadAnimation';

import DataJson from './data/data.json';

function App() {

  const [portifolioData, setPortifolioData] = useState({});


  useEffect(() => {
    setPortifolioData(DataJson);
  }, []);

  return (
    <>
      <Header data={portifolioData.Header} />

      <main id="home">
        <div className="background-video">
          <video src={portifolioData.Video} autoplay="true" loop="true" muted="true" ></video>
        </div>

        <Parallax >
          <div style={{ height: 500 }}>
            <div className="paralax-1">
              <p>É um prazer tê-lo aqui. Seja bem-vindo! </p>
              <HelloAnimation />
            </div>
          </div>
        </Parallax>

        <Banner data={portifolioData.Banner} />

        <Parallax bgImage={portifolioData.Parallax1}>
          <div style={{ height: 200 }}>
            <div className="paralax-1">
              <p>Enfim, caro visitante espero que sua passagem por aqui seja uma experiência agradável e satisfatória, fique à vontade pois a casa é sua!</p>
            </div>
          </div>
        </Parallax>

        <section id="projetos">
          <h2>Confira alguns dos Projetos que tenho</h2>
          {
            portifolioData.Projetos && (portifolioData.Projetos.map((item, key) => {
              return (
                <Projeto projeto={item} chave={key} />
              )
            }))
          }
        </section>

        <Parallax>
          <div style={{ height: 400 }}>
            <div>
            </div>
          </div>
        </Parallax>

        <Contato data={portifolioData.Contato} />

      </main>
      <Footer data={portifolioData.Footer} />
      <LoadAnimation />
    </>
  );
}

export default App;

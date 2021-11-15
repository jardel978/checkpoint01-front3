import './App.scss';
import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
// import { Projetos } from './components/Projetos';
import { Projeto } from './components/Projetos/Projeto';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';

import DataJson from './data/data.json';

function App() {

  const [portifolioData, setPortifolioData] = useState({});

  useEffect(() => {
    setPortifolioData(DataJson);
  }, []);


  // console.log(portifolioData.Contato)
  return (
    <>
      <Header data={portifolioData.Header} />

      <main id="home">
        <div className="background-video">
          <video src={portifolioData.Video} autoplay="true" loop="true" muted="true" ></video>
        </div>
        <Banner data={portifolioData.Banner} />

        <Parallax bgImage={portifolioData.Parallax1}>
          <div style={{ height: 400 }}>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus le</p>
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

        {/* <Projetos data={ portifolioData.Projetos } /> */}

        <Parallax>
          <div style={{ height: 400 }}>
            <div>
              <Contato data={portifolioData.Contato} />
            </div>
          </div>
        </Parallax>

        <Contato data={portifolioData.Contato} />

      </main>
      <Footer data={portifolioData.Footer} />
    </>
  );
}

export default App;

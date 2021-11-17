import './App.scss';
import React, { useState, useEffect } from 'react'
import { MotionAnimate } from 'react-motion-animate';
import { Parallax } from 'react-parallax';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Projeto } from './components/Projetos/Projeto';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { HelloAnimation } from './components/HelloAnimation';
import { Skills } from './components/Skills';
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
            <div className="paralax paralax-1">
              <p>É um prazer tê-lo aqui. Seja bem-vindo! </p>
              <HelloAnimation />
            </div>
          </div>
        </Parallax>

        <MotionAnimate animation='fadeInUp' reset={true} speed={2}>
          <Banner data={portifolioData.Banner} />
        </MotionAnimate>

        <MotionAnimate animation='scrollFadeOut'>
          <Parallax>
            <div style={{ height: 290 }}>
              <div className="paralax paralax-2">
                <p>Enfim, caro visitante espero que sua passagem por aqui seja uma experiência agradável e satisfatória, fique à vontade pois a casa é sua!</p>
              </div>
            </div>
          </Parallax>
        </MotionAnimate>

        <MotionAnimate
          delay={0.4}
          speed={2}
          ease={[0.75, 0.45, 0.53, 0.94]}
          reset={true}>
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
        </MotionAnimate>

        <MotionAnimate reset={true}>
          <Parallax>
            <div style={{ height: 330 }}>
              <div className="paralax">
                <Skills />
              </div>
            </div>
          </Parallax>
        </MotionAnimate>

        <MotionAnimate reset={true}>
          <Contato data={portifolioData.Contato} />
        </MotionAnimate>
      </main>
      <Footer data={portifolioData.Footer} />
      <LoadAnimation />
    </>
  );
}

export default App;

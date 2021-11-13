import './App.scss';
import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Projetos } from './components/Projetos';
import { Contato } from './components/Contato';

import DataJson from './data/data.json';

function App() {

  const [portifolioData, setPortifolioData] = useState({});


  useEffect(() => {
    setPortifolioData(DataJson);
  }, []);

// console.log(portifolioData.Projetos)
  return (
    <>
      <Header data={portifolioData.Header} />
        
      <main id="home">

        <Banner data={ portifolioData.Banner } />
        <div className="background-video">
          <video src={portifolioData.Video} autoplay="true" loop="true" muted="true" ></video>
        </div>
        
        <Projetos data={ portifolioData.Projetos } />

        <Parallax bgImage={portifolioData.Parallax1}>
          <div style={{ height: 200 }}>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus le</p>
            </div>
          </div>
        </Parallax>
        <Contato />

      </main>
    </>
  );
}

export default App;

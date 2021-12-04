import React from 'react';
import Layout from './Components/layout';
import Data from "./portfolio-images.json";

const Portfolio = () => {
  return (
    <Layout>
      <div className="portfolio">
        <div className="portfolio-hero">
          <div className="row">
            <div className="big-title-Book">Portfolio </div>
            <div className="col-xs-offset-1 col-xs-4">
            <div className="text-note">Selection of projects carried out by the studio in different contexts, different scales and with varying conditions.</div>
          </div>
          </div>
        </div>
        
        {/* FALTA OS BOTOES COM OS FILTROS PARA ESCOLHER A ORDEM DOS PROJETOS*/}
        
          <div className="portfolio-projects">
            {
              Data.map(image =>{
                return(
                  <div key={image.id}>      
                  <img src={image.src} alt={image.name}/>
                  </div>
                )
              })
            }   
          </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
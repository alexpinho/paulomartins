import React from 'react';
import CardTeam from './Components/CardTeam';
import Layout from './Components/layout';

const Atelier = () => {
  return (
    <Layout>
      <div className="atelier">
        <div className="atelier-hero">
          <div className="big-title-Book col-xs-6">Meet our</div>
          <div className="big-title-BookItalic col-xs-3">team</div>
          <img src="images/team.jpg" className="atelier-hero-banner col-xs-5" alt="team" />
        </div>
        <div className="atelier-information">
          <div className="text col-xs-offset-2 col-xs-4">Paulo Martins Arquitectura assumes itself as a studio focused on experimental and strategic design, provoking and making the sensorial and emotional experiences part of the process and a goal to be achieved.</div>
          <div className="text col-xs-offset-4 col-xs-4">Through a holistic vision, we view and understand our work as a vehicle responsible for social, political, economical well-being and social equilibrium, assuming this responsibility as an opportunity to reinvent strategies and propose alternatives!</div>
          <div className="text col-xs-offset-3 col-xs-4">We project value-added buildings, designed to offer a high level of satisfaction and well-being, enhancing the relationship between dualities (interior / exterior, light / shade, soft / rough…), blurring their boundaries and diluting the barrier that separates them.</div>
        </div>
        <div className="atelier-team">
          <div className="title-Regular col-xs-offset-3"> The Team </div>
      </div>
      <div className="atelier-wrapper">
        <CardTeam
        image="images/pm.jpg"
        title={("Paulo Martins")}
        job={("principal architect")}/>
         <CardTeam
        image="images/jps.jpg"
        title={("João Pedro Silva")}
        job={("architect")}/>
         <CardTeam
        image="images/pm.jpg"
        title={("Paulo Martins")}
        job={("principal architect")}/>
         <CardTeam
        image="images/jps.jpg"
        title={("João Pedro Silva")}
        job={("architect")}/>
         <CardTeam
        image="images/pm.jpg"
        title={("Paulo Martins")}
        job={("principal architect")}/>
         <CardTeam
        image="images/jps.jpg"
        title={("João Pedro Silva")}
        job={("architect")}/>
        
      </div>
  
      <div className="atelier-quote big-text-quote">We propose a sustainable and hedonistic architecture, free from preconception and stereotypes. </div>
      </div>  
    </Layout>
  );
};

export default Atelier;

import React from 'react';
import Layout from './Components/layout';

const individualproject = () => {
    return (
      <Layout>
        <div className="individualproject">
            <div className="individualproject-hero">
                <div className="text-detail">2020</div> 
                <div className="big-title-Book col-xs-4">Pisco House </div>       
                <img src="images/picohousesmall.jpg" classeName="individualproject-hero-banner col-xs-6" alt=""/>
                <div className="text-note col-xs-2"><b>client</b> Confidential <br/> <b>place</b> Águeda . Portugal <br/><b>gross</b> area 550 sqm <br/> <b>status</b> design development</div>
           </div>
           <img src="images/picohousebig.jpg" className="col-xs-12" alt=""/>
        </div>
      
      </Layout>
    );
  };
  
  export default individualproject;
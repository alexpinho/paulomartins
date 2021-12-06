import React from 'react';
import Layout from './Components/layout';
import CardPublication from "./Components/CardPublication";
import { t } from 'i18next';

const Media = () => {
  return (
    <Layout>
      <div className="media">
        <div className="media-hero">
          <div className="row">
            <div className="big-title-Book">Media </div>
            <div className="col-xs-offset-3 col-xs-5">
            <div className="text-note">Selection of news, references about the studio in online and printed publications, as well as awards and comments to our projects.</div>
          </div>
          </div>
        </div>
      </div>

              {/* FALTA OS BOTOES COM OS FILTROS PARA ESCOLHER A ORDEM DOS PROJETOS*/}
<div className="media-publication">
  <div className="row">
    
    <CardPublication
      image="images/pub1.jpg"
      title={t("card-publication-title")}
      local={t("card-publication-local")}
       date={t("card-publication-date")}/>

    <CardPublication
          image="images/pub2.jpg"
          title={t("card-publication-title-1")}
          local={t("card-publication-local-1")}
          date={t("card-publication-date-1")}/>

    <CardPublication
              image="images/pub3.jpg"
              title={t("card-publication-title-2")}
              local={t("card-publication-local-2")}
              date={t("card-publication-date-2")}/>

    <CardPublication
              image="images/pub4.jpg"
              title={t("card-publication-title-3")}
              local={t("card-publication-local-3")}
              date={t("card-publication-date-3")}/>

  </div>




</div>


    </Layout>
  );
};

export default Media;

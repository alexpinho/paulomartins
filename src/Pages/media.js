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


    <CardPublication
              image="images/pub5.jpg"
              title={t("card-publication-title-4")}
              local={t("card-publication-local-4")}
              date={t("card-publication-date-4")}/>


    <CardPublication
              image="images/pub6.jpg"
              title={t("card-publication-title-5")}
              local={t("card-publication-local-5")}
              date={t("card-publication-date-5")}/>

<CardPublication
              image="images/pub7.jpg"
              title={t("card-publication-title-6")}
              local={t("card-publication-local-6")}
              date={t("card-publication-date-6")}/>

<CardPublication
              image="images/pub8.jpg"
              title={t("card-publication-title-7")}
              local={t("card-publication-local-7")}
              date={t("card-publication-date-7")}/>

<CardPublication
              image="images/pub9.jpg"
              title={t("card-publication-title-8")}
              local={t("card-publication-local-8")}
              date={t("card-publication-date-8")}/>

<CardPublication
              image="images/pub10.jpg"
              title={t("card-publication-title-9")}
              local={t("card-publication-local-9")}
              date={t("card-publication-date-9")}/>

<CardPublication
              image="images/pub11.jpg"
              title={t("card-publication-title-10")}
              local={t("card-publication-local-10")}
              date={t("card-publication-date-10")}/>

<CardPublication
              image="images/pub12.jpg"
              title={t("card-publication-title-11")}
              local={t("card-publication-local-11")}
              date={t("card-publication-date-11")}/>

<CardPublication
              image="images/pub13.jpg"
              title={t("card-publication-title-12")}
              local={t("card-publication-local-12")}
              date={t("card-publication-date-12")}/>

<CardPublication
              image="images/pub14.jpg"
              title={t("card-publication-title-12")}
              local={t("card-publication-local-12")}
              date={t("card-publication-date-12")}/>

<CardPublication
              image="images/pub15.jpg"
              title={t("card-publication-title-14")}
              local={t("card-publication-local-14")}
              date={t("card-publication-date-14")}/>

<CardPublication
              image="images/pub16.jpg"
              title={t("card-publication-title-15")}
              local={t("card-publication-local-15")}
              date={t("card-publication-date-15")}/>

<CardPublication
              image="images/pub17.jpg"
              title={t("card-publication-title-16")}
              local={t("card-publication-local-16")}
              date={t("card-publication-date-16")}/>

<CardPublication
              image="images/pub18.jpg"
              title={t("card-publication-title-17")}
              local={t("card-publication-local-17")}
              date={t("card-publication-date-17")}/>

<CardPublication
              image="images/pub19.jpg"
              title={t("card-publication-title-18")}
              local={t("card-publication-local-18")}
              date={t("card-publication-date-18")}/>

<CardPublication
              image="images/pub20.jpg"
              title={t("card-publication-title-19")}
              local={t("card-publication-local-19")}
              date={t("card-publication-date-19")}/>
              

  </div>




</div>


    </Layout>
  );
};

export default Media;

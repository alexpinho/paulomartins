import React from 'react';
import { useTranslation } from "react-i18next";
import Layout from './Components/Layout';
import CardProject from "./Components/CardProject";


function Home(){
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="home">

        <div className="home-hero">
            <img src="images/banner-1.jpg" className="home-hero-banner col-xs-7" alt="" />
            <div className="big-title-Book">{t("hero-title-1")} <br/> 
            {t("hero-title-2")} <span className="big-title-BookItalic">{t("hero-title-3")}</span>
            </div>
        </div>

        <div className="home-portfolio">
            <div className="home-portfolio-intro row">
                <div className="col start-xs">
                    <div className="home-portfolio-intro-left text-detail">2011-2021</div>
                </div>
                <div className="col-xs-offset-3">
                <div className="title-Regular">{t("home-portfolio-title")}</div>
                </div>
                <div className="col end-xs">
                    <a href='/portfolio' className="home-portfolio-intro-right text-detail">{t("home-portfolio-topage")}</a>
                </div>
            </div> 

            <div className="home-portfolio-note col-xs-offset-4">
                <div className="text-note">{t("home-portfolio-text-note")}</div>
            </div>
            <div className="home-portfolio-projects">
                <CardProject
                cardProjectClassName="col-xs-offset-2 col-xs-7"
                cardType="card-project"
                image="images/homeportfolio-1.png"
                title={t("card-project-title-1")}
                location={t("card-project-location-1")}
                country={t("card-project-country-1")}/>

                <div className="row"> 
                    <CardProject
                    cardProjectClassName="col-xs-4"
                    cardType="card-project"
                    image="images/homeportfolio-2.jpg"
                    title={t("card-project-title-2")}
                    location={t("card-project-location-2")}
                    country={t("card-project-country-2")}/>
                    <CardProject
                    cardProjectClassName="col-xs-8"
                    cardType="card-project-down"
                    image="images/homeportfolio-3.jpg"
                    title={t("card-project-title-3")}
                    location={t("card-project-location-3")}
                    country={t("card-project-country-3")}/>
                 </div>  

                <CardProject
                cardProjectClassName="col-xs-11"
                cardType="card-project"
                image="images/homeportfolio-4.jpeg"
                title={t("card-project-title-4")}
                location={t("card-project-location-4")}
                country={t("card-project-country-4")}/>

                <div className="row"> 
                    <CardProject
                    cardProjectClassName="col-xs-offset-1 col-xs-5"
                    cardType="card-project"
                    image="images/homeportfolio-5.jpg"
                    title={t("card-project-title-5")}
                    location={t("card-project-location-5")}
                    country={t("card-project-country-5")}/>
                    <CardProject
                    cardProjectClassName="col-xs-6"
                    cardType="card-project-down"
                    image="images/homeportfolio-6.jpeg"
                    title={t("card-project-title-6")}
                    location={t("card-project-location-6")}
                    country={t("card-project-country-6")}/>
                 </div>  
            </div>
        </div>

        <div className="home-jobs">
            <div className="row center-xs">
                <div className="big-title-BookItalic home-jobs-text">{t("jobs-title-1")}</div>
            </div>
        </div>
        
        
      </div>
    </Layout>
  );
};

export default Home;
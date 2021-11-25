import React from 'react';
import Layout from './Components/Layout';
import { useTranslation } from "react-i18next";

function Home(){
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="home">

        <div className="home-hero">
            <img src="images/banner-1.jpg" className="home-hero-banner" alt="" />
            <div className="big-title-Book">{t("hero-title-1")} <br/> 
            {t("hero-title-2")} <span className="big-title-BookItalic">{t("hero-title-3")}</span>
            </div>
        </div>

        <div className="home-portfolio">
            <div className="home-portfolio-intro">
                <div className="home-portfolio-intro-left">
                    <div className="text-detail">2011-2021</div>
                </div>
                <div className="title-Regular">{t("home-portfolio-title")}</div>
                <div className="home-portfolio-intro-right">
                    <a href='/portfolio' className="text-detail">{t("home-portfolio-topage")}</a>
                </div>
            </div>
                <div className="home-portfolio-note">
                    <div className="text-note">{t("home-portfolio-text-note")}</div>
                </div>
                <div className="home-portfolio-1">
                    <img src="images/homeportfolio-1.png" className="home-portfolio-1-img" alt="" />
                    <div className="home-portfolio-1-titles">
                        <div className="home-subtitle">{t("home-portfolio-home1")}</div>
                        <div className="home-subtitle-location">{t("home-portfolio-home1-location")}</div>
                    </div>
                </div>
                <div className="home-portfolio-2">
                    <img src="images/homeportfolio-2.jpg" className="home-portfolio-2-img" alt="" />
                    <img src="images/homeportfolio-3.jpg" className="home-portfolio-3-img" alt="" />
                    <div className="home-portfolio-2-titles">
                        <div className="home-subtitle">{t("home-portfolio-home1")}</div>
                        <div className="home-subtitle-location">{t("home-portfolio-home1-location")}</div>
                    </div>
                </div>
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;

import React from 'react';
import Layout from './Components/layout';
import { useTranslation } from "react-i18next";

function Home(){
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="home">

        <div className="home-hero">
        <img src="images/banner-1.jpg" className="home-hero-banner" alt="" />
        <div className="big-title-Book">{t("hero-title-1")} <br/> 
        {t("hero-title-2")} <span className="big-title-BookItalic">{t("hero-title-3")}</span></div>
        </div>

        <div className="home-portfolio">
        <div className="big-title-Regular">{t("home-portfolio-title")}</div>
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;

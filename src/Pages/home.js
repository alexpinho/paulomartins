import React from 'react';
import Layout from './Components/layout';
import { useTranslation } from "react-i18next";

function Home(){
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="Home">
        <h1 className="big-title-Book">Architecture <br/> {t("hero-title")}</h1>
      </div>
    </Layout>
  );
};

export default Home;

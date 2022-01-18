import React from 'react';
import { useTranslation } from "react-i18next";
import Typeform from "./Components/Typeform";
import Layout from './Components/layout';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="contacts">
        <div className='contacts-hero'>
          <div className="big-title-Book"> {t("contacts-contacts-title")} </div>
          </div>

        <div className='contacts-row'>
          <div className="contacts-col-1">

            <div className="contacts-info text"> {t("contacts-info-general")} </div>
            <div className="contacts-adress text-note"> {t("contacts-adress-1")} </div>
            <div className="contacts-info text"> {t("contacts-info-careers")} </div>
            <div className="contacts-adress text-note"> {t("contacts-adress-2")} </div>
            <div className="contacts-info text"> {t("contacts-info-press")} </div>
            <div className="conacts-adress text-note"> {t("contacts-adress-3")} </div>

          </div>

          <div className="contacts-col-2">
          <Typeform
              name={t("contacts-form-name")}
              email={t("contacts-form-email")}
              message={t("contacts-form-message")}
               />
          </div>

        </div>

        <div className='contacts-map1'>

          <div className='contacts-map1-intro card-project-title'>{t("contacts-map-info")}</div>
          <div className='contacts-map1-portugal'>
          <img src="images/map-01.png" class="contacts-map-image-1" alt=""></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;

import React from 'react';
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";
import Typeform from "./Components/Typeform";
import Layout from './Components/layout';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="contacts" initial={{opacity:0}} animate={{opacity:["0%", "50%", "100%"]}} transition={{duration: 1}}>
        <motion.div className='contacts-hero' initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{duration: 1}}>
          <div className="big-title-Book"> {t("contacts-contacts-title")} </div>
        </motion.div>

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

          <div className='contacts-map1-main'>

            <div className='contacts-map1-portugal'>
              <img src="images/map-01.png" class="contacts-map1-image-1" alt=""></img>
            </div>

            <div className='contacts-map1-description text-note'>
              <div id="morada-01">{t("contacts-map-main")}</div>
              <div id="contactos-01">{t("contacts-map-description")}</div>
            </div>

          </div>

        </div>

        <div className='contacts-map2'>

          <div className='contacts-map2-intro card-project-title'>{t("contacts-map-info2")}</div>

          <div className='contacts-map2-main'>

            <div className='contacts-map2-portugal'>
              <img src="images/map-02.png" class="contacts-map2-image-1" alt=""></img>
            </div>

            <div className='contacts-map2-description text-note'>
              <div id="morada-02">{t("contacts-map-main2")}</div>
              <div id="contactos-02">{t("contacts-map-description-2")}</div>
            </div>

          </div>

        </div>

      </div>
    </Layout >
  );
};

export default Contacts;

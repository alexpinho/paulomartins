import React from 'react';
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";
import Layout from './Components/layout';
import CardJobs from "./Components/CardJobs";
import CardJobsPopup from "./Components/CardJobsPopup";
import CardJobsExtended from "./Components/CardJobsExtended";


import { useState } from 'react';


function Jobs() {
  const { t } = useTranslation();
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Layout>


      <div className="jobs" className="contacts">



        <CardJobsPopup trigger={buttonPopup} setTrigger={setButtonPopup}>

          <CardJobsExtended

            title={t("card-jobs-title-2")}
            note={t("card-jobs-extended-note-2")}
            description={t("card-jobs-description-1")}
            fill={t("card-jobs-extended-fill-2")}

            subtitle1={t("card-jobs-extended-subtitle1-2")}
            responsibilities={t("card-jobs-extended-responsibilities-2")}

            subtitle2={t("card-jobs-extended-subtitle2-2")}
            requirements={t("card-jobs-extended-requirements-2")} />

        </CardJobsPopup>

        <motion.div className="jobs-hero" initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{duration: 1}}>

          <div className="row">

            <div className="big-title-Book" id='title'> {t("jobs-jobs-title")} </div>

            <div /*className="col-xs-offset-1 col-xs-6"*/ id='notes'>
              <div className="text-note">{t("jobs-text-note")}</div>
            </div>

          </div>

        </motion.div>

        <div className="jobs-wrapper">

          <div className="jobs-wrapper-card">
           <CardJobs
              title={t("card-jobs-title-1")}
              description={t("card-jobs-description-1")} />

            <div className="text-note" id="wrapper-button">
              <button onClick={() => setButtonPopup(true)}>{t("card-jobs-see")}</button>
            </div>
          </div> 

          <div className="jobs-wrapper-card">
            <CardJobs
              title={t("card-jobs-title-2")}
              description={t("card-jobs-description-1")} />
            <div className="text-note" id="wrapper-button">
              <button onClick={() => setButtonPopup(true)}>{t("card-jobs-see")}</button>
            </div>
          </div>

          <div className="jobs-wrapper-card">
            <CardJobs
              title={t("card-jobs-title-3")}
              description={t("card-jobs-description-1")} />
            <div className="text-note" id="wrapper-button">
              <button onClick={() => setButtonPopup(true)}>{t("card-jobs-see")}</button>
            </div>
          </div>

        </div>

      </div>


    </Layout>
  );
};

export default Jobs;

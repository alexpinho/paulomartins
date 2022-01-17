import React from 'react';
import { useTranslation } from "react-i18next";
import Layout from './Components/layout';
import CardJobs from "./Components/CardJobs";
import CardJobsPopup from "./Components/CardJobsPopup";

import { useState } from 'react';


function Jobs() {
  const { t } = useTranslation();
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Layout>

      <div className="jobs">
        <div className="jobs-hero">

          <div className="row">

            <div className="big-title-Book" id='title'> {t("jobs-jobs-title")} </div>

            <div className="col-xs-offset-1 col-xs-6" id='notes'>
              <div className="text-note">{t("jobs-text-note")}</div>
            </div>

          </div>

        </div>

        <div className="jobs-wrapper">

          <div className="jobs-wrapper-card">
            <CardJobs
              title={t("card-jobs-title-1")}
              description={t("card-jobs-description-1")} />

            <div className="text-note" id="wrapper-button">{t("card-jobs-see")}</div>
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
            <div className="text-note" id="wrapper-button">{t("card-jobs-see")}</div>
          </div>
        </div>
      </div>

      <CardJobsPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
 
      </CardJobsPopup>

    </Layout>
  );
};

export default Jobs;

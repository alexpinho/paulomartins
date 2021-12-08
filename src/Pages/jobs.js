import React from 'react';
import { useTranslation } from "react-i18next";
import Layout from './Components/layout';
import CardJobs from "./Components/CardJobs";

function Jobs() {
  const { t } = useTranslation();
  return (
    <Layout>

      <div className="jobs">
        <div className="jobs-hero">

          <div className="row">

            <div className="big-title-Book" > {t("jobs-jobs-title")} </div>

            <div className="col-xs-offset-1 col-xs-6">
              <div className="text-note">{t("jobs-text-note")}</div>
            </div>

          </div>

        </div>

        <div className="jobs-wrapper">
          <CardJobs
            title={t("card-jobs-title-1")}
            description={t("card-jobs-description-1")}
            see={t("card-jobs-see")} />
          <CardJobs
            title={t("card-jobs-title-2")}
            description={t("card-jobs-description-1")}
            see={t("card-jobs-see")} />
          <CardJobs
            title={t("card-jobs-title-3")}
            description={t("card-jobs-description-1")}
            see={t("card-jobs-see")} />
        </div>
      </div>

    </Layout>
  );
};

export default Jobs;

import React from 'react';
import { useTranslation } from "react-i18next";
import Layout from './Components/layout';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="contacts">
        <div className="big-title-Book"> {t("contacts-contacts-title")} </div>
      </div>
    </Layout>
  );
};

export default Contacts;

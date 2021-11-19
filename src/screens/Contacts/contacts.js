import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './contacts.module.scss';

const Contacts = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>Contacts.</h1>
      </div>
    </Layout>
  );
};

export default Contacts;

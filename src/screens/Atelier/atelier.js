import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './atelier.module.scss';

const Atelier = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>Atelier.</h1>
      </div>
    </Layout>
  );
};

export default Atelier;

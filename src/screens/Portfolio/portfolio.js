import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>Portfolio.</h1>
      </div>
    </Layout>
  );
};

export default Portfolio;
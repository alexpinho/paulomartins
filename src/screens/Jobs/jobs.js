import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './jobs.module.scss';

const Jobs = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>Jobs.</h1>
      </div>
    </Layout>
  );
};

export default Jobs;
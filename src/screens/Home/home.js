import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './home.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        hello
      </div>
    </Layout>
  );
};

export default Home;

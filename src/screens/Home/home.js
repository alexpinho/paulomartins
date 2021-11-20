import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './home.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1 className="big-title-Book">Architecture <br/> &</h1>
      </div>
    </Layout>
  );
};

export default Home;

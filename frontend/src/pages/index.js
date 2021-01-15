import React from 'react';
import { Layout, SEO, Hero, Intro, MisionVision } from '../components/index';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <MisionVision />
  </Layout>
);

export default IndexPage;

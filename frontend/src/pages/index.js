import React from 'react';
import { Link } from 'gatsby';
import { 
  Layout, 
  SEO, 
  Hero,
  Intro,
  MisionVision
} from '../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice
} from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <MisionVision />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <FontAwesomeIcon icon={faCoffee} size="1x" />
      <FontAwesomeIcon icon={faAddressBook} size="2x" />
      <FontAwesomeIcon icon={faAirFreshener} size="3x" />
      <FontAwesomeIcon icon={faAtom} size="4x" />
      <FontAwesomeIcon icon={faAmbulance} size="5x" />
      <FontAwesomeIcon icon={faBus} size="6x" />
      <FontAwesomeIcon icon={faCoins} size="7x" />
      <FontAwesomeIcon icon={faDice} size="8x" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;

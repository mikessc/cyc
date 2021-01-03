import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from './index';
import { Container, Grid } from '@material-ui/core';

import { logo, heroImg } from '../images/index';

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${heroImg}) no-repeat center;
  background-size: cover;
  position: relative;
  margin-top: 70px;
`;

const HeroLogo = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WhiteLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.6;
`;

const H1 = styled.h1`
  text-align: center;
`;

const HeaderComp = () => {
  return (
    <>
      <Hero>
        <WhiteLayer />
        <HeroLogo>
          <Grid container justify="center">
            <Grid item md={6}>
              <img src={logo} alt="" />
              <H1>Bienvenidos!</H1>
            </Grid>
          </Grid>
        </HeroLogo>
      </Hero>
    </>
  );
};

export default HeaderComp;

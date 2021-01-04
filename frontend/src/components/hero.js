import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider, H1, B, WhiteLayer } from './styles';
import { Container, Grid } from '@material-ui/core';

import { logo, heroImg } from '../images/index';

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${heroImg}) no-repeat center;
  background-attachment: fixed;
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

const WelcomeText = styled(H1)`
  text-align: center;
`;

const HeroComp = () => {
  return (
    <>
      <Hero>
        <WhiteLayer color="white" />
        <HeroLogo>
          <Grid container justify="center">
            <Grid item md={6}>
              <img src={logo} alt="" />
              <Divider height="30px" heightT="40px" heightD="50px" />
              <WelcomeText>
                <B>Bienvenidos!</B>
              </WelcomeText>
            </Grid>
          </Grid>
        </HeroLogo>
      </Hero>
    </>
  );
};

export default HeroComp;

import React from 'react';
import styled from 'styled-components';
import { Underlined, IntroContainer, Bolder, TextM, H1 as A, B, P, Divider } from './styles';
import { Container, Grid } from '@material-ui/core';

import { cargo } from '../images/index';

const H1 = styled(A)`
  text-align: center;
`;

const Intro = () => {
  return (
    <>
      <Container>
        <IntroContainer>
          <H1>
            <Underlined>
              <B>C</B>
              <TextM>&</TextM>
              <B>C</B> <B>MULTI</B>SERVICIOS
            </Underlined>
          </H1>
          <Divider heightM="30px" heightT="40px" heightD="50px" />
          <Grid container justify="center">
            <Grid item sm={10} md={8}>
              <P className="center">
                Somos una empresa dedicada al transporte y distribución de mercancías tipo currier contamos con más de
                10 Años en el mercado ofreciendo soluciones reales a sus problemas de logística.
              </P>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item sm={6} md={4}>
              <img src={cargo} alt="" />
            </Grid>
          </Grid>
        </IntroContainer>
      </Container>
    </>
  );
};

export default Intro;

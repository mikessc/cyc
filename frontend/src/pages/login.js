import React from 'react';
//import { Link } from 'gatsby';
import Login from '../components/app/login';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFlag, faEye } from '@fortawesome/free-regular-svg-icons';
import appLogo from '../images/app_logo.png';
import AppLayout from '../components/app/appLayout';

const Title = styled.h1`
  text-align: center;
  margin: 50px 0;
`;

const AppLogo = styled.img`
  display: block;
`;

const VerticalCenter = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginPage = ({ location }) => {
  const redirect = '/app';

  return (
    <AppLayout>
      <VerticalCenter>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <AppLogo src={appLogo} alt="C&C Multiservicios App de Entregas y Web tracking" />
            <Title>App de Entregas y Web tracking</Title>
          </Grid>
        </Grid>
        <Login redirect={redirect} />
      </VerticalCenter>
    </AppLayout>
  );
};

export default LoginPage;

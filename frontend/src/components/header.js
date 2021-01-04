import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Colors from './index';
import { Container, Grid } from '@material-ui/core';
import { logo2 } from '../images/index';

const Header = styled.header`
  background: ${Colors.orange_light};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const HeaderContainer = styled(Container)`
  padding: 8px 0;
`;

const Logo = styled.img`
  width: 70%;
`;

const HeaderComp = () => {
  return (
    <>
      <Header>
        <HeaderContainer maxWidth="md">
          <Grid container alignItems="center">
            <Grid item md={2}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`
                }}
              >
                <Logo src={logo2} alt="C&C Multiservicios" />
              </Link>
            </Grid>
            <Grid item md={10}>
              <Grid container direction="row" justify="flex-end" alignItems="center" spacing={2}>
                <Grid item>
                  <Link>Item 1</Link>
                </Grid>
                <Grid item>
                  <Link>Item 2</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </HeaderContainer>
      </Header>
    </>
  );
};

export default HeaderComp;

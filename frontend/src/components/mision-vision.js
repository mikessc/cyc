import React from 'react';
import styled from 'styled-components';
import { H3, B, WhiteLayer, Devices, Colors, P } from './styles';
import { Container, Grid } from '@material-ui/core';
import { logistics_bg } from '../images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faEye } from '@fortawesome/free-regular-svg-icons';

const MisionVision = styled.div`
  width: 100%;
  position: relative;
  margin-top: 70px;
  padding-top: 80px;
  padding-bottom: 50px;

  @media ${Devices.tablet} {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  @media ${Devices.desktop} {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${logistics_bg}) no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    filter: grayscale(100%);
    z-index: -1;
  }
`;

const Card = styled.div`
  text-align: center;
  z-index: 200;
  cursor: pointer;

  .svg-inline--fa,
  .cardIcon {
    transition: all 0.5s ease;
  }

  &:hover {
    .cardIcon {
      border-color: ${Colors.orange};
    }

    .svg-inline--fa {
      color: ${Colors.orange};
    }
  }
`;

const CardIcon = styled.div`
  color: ${Colors.white};
  margin-bottom: 30px;
  border: 5px solid ${Colors.white};
  border-radius: 100%;
  padding: 20px;
  display: inline-block;
`;

const CardTitle = styled(H3)`
  color: ${Colors.white};
  margin-bottom: 30px;
`;

const CardDesc = styled(P)`
  color: ${Colors.white};
  margin-bottom: 30px;
`;

const MisionVisionComp = () => {
  return (
    <>
      <MisionVision>
        <WhiteLayer color="black" />
        <Container>
          <Grid container justify="center" spacing="4">
            <Grid item sm={6} md={4}>
              <Card>
                <CardIcon className="cardIcon">
                  <FontAwesomeIcon icon={faFlag} size="4x" />
                </CardIcon>
                <CardTitle>
                  <B>Misión</B>
                </CardTitle>
                <CardDesc>
                  Proporcionar soluciones profesionales y personalizadas en el ámbito del transporte y distribución de
                  mercancías, a nivel nacional e internacional, ofrecer soluciones reales de logística, con el fin de
                  dar respuesta veraz y oportuna a las necesidades de nuestros clientes y así formar parte activa en la
                  consecución de sus objetivos.
                </CardDesc>
              </Card>
            </Grid>
            <Grid item sm={6} md={4}>
              <Card>
                <CardIcon className="cardIcon">
                  <FontAwesomeIcon icon={faEye} size="4x" />
                </CardIcon>
                <CardTitle>
                  <B>Visión</B>
                </CardTitle>
                <CardDesc>
                  Destacar como uno de los principales operadores logísticos del mercado, aportando soluciones
                  profesionales y personalizadas en el ámbito del transporte y la logística, con clara orientación al
                  cliente, basados en la formación, motivación, compromiso e implicación del recurso humano.
                </CardDesc>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MisionVision>
    </>
  );
};

export default MisionVisionComp;

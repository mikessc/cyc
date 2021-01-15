import React from 'react';
import styled from 'styled-components';
import { Container, Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFlag, faEye } from '@fortawesome/free-regular-svg-icons';
//import axios from 'axios';
//import storage from '../../services/storage';
//import constants from '../../services/constants';

const apiURL = process.env.GATSBY_API_URL;

const MainContainer = styled(Grid)`
  margin-top: 20px;
`;

const ListContainerDiv = styled.div`
  width: 100%;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {};

  render = () => {
    return (
      <>
        <Container>
          <MainContainer container justify="center">
            <Grid item xs={12} sm={6}>
              <h1>Paquetes</h1>
            </Grid>
          </MainContainer>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <ListContainerDiv>
                <List>
                  <ListItem button>
                    <ListItemText primary="Paquete 1" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary="Paquete 1" />
                  </ListItem>
                </List>
              </ListContainerDiv>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };
}

export default Dashboard;

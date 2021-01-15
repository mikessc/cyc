import React, { useState } from 'react';
import { navigate } from 'gatsby';
import useAuth from '../../services/useAuth';
import styled from 'styled-components';
import {
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import { Colors } from '../../components/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import appLogo from '../../images/app_logo.png';

const useStyles = makeStyles(theme => ({
  progress: {
    color: Colors.white,
    padding: '5px'
  }
}));

const Login = ({ redirect }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { state, login } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      await login({ identifier, password });
      navigate(redirect);
    } catch (e) {
      console.log('Error occurred during authentication');
      const {
        response: {
          data: {
            message: [
              {
                messages: [error]
              }
            ]
          }
        }
      } = e;
      const { message: msg } = error;
      setError(msg);
      setLoading(false);
    }
  };

  const CustomButton = styled(Button)`
    background-color: ${Colors.orange};
    color: ${Colors.white};
    font-weight: 'bold !important';

    &:hover {
      background-color: ${Colors.orange_light};
    }
  `;

  const ErrorMsg = styled.div`
    color: red;
    padding: 10px;
    font-size: 14px;
    text-align: center;
  `;

  return (
    <>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <form onSubmit={handleSubmit}>
              <Card>
                <CardContent>
                  <TextField
                    id="username"
                    label="Usuario"
                    variant="outlined"
                    fullWidth="true"
                    autoComplete="off"
                    onChange={e => {
                      setIdentifier(e.target.value);
                    }}
                    value={identifier}
                  />
                  <Box mt={4}></Box>
                  <TextField
                    id="password"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    fullWidth="true"
                    autoComplete="off"
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                  <Box mt={4} display="flex" flexDirection="column">
                    <CustomButton variant="contained" type="submit">
                      {!loading ? <b>Entrar</b> : <CircularProgress className={classes.progress} size={25} />}
                    </CustomButton>
                  </Box>
                </CardContent>
              </Card>
            </form>
          </Grid>
          <Grid item xs={12}>
            <ErrorMsg>
              {error.length > 1 && (
                <p>
                  <FontAwesomeIcon icon={faExclamationCircle} size="1x" /> {error}
                </p>
              )}
            </ErrorMsg>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;

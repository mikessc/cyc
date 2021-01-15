import React from 'react';
import useAuth from '../../services/useAuth';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faShippingFast, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../../components/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    height: 'auto',
    color: Colors.blue,
    padding: '10px 0 0',
    background: '#eeeeee'
  }
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const auth = useAuth();

  const handleLogout = e => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Paquetes"
        icon={<FontAwesomeIcon icon={faBoxOpen} size="2x" disableRipple={true} />}
      />
      <BottomNavigationAction label="Ruta" icon={<FontAwesomeIcon icon={faShippingFast} size="2x" />} />
      <BottomNavigationAction
        label="Salir"
        onClick={handleLogout}
        icon={<FontAwesomeIcon icon={faSignOutAlt} size="2x" />}
      />
    </BottomNavigation>
  );
}

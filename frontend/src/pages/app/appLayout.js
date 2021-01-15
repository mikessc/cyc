import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import { SEO } from '../../components/';
import useAuth from '../../services/useAuth';
import './appGlobalStyles.css';

const AppLayout = ({ children }) => {
  const { state, isAuthenticated } = useAuth();
  const [showNav, toggleNav] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      toggleNav(true);
    }
  });

  return (
    <>
      <SEO title="App de Entregas" />
      <main>{children}</main>
      {isAuthenticated ? (
        <>
          <Navigation />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;

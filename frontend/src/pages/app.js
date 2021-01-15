import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import AppLayout from '../components/app/appLayout';
import Dashboard from './app/dashboard';
import useAuth from '../services/useAuth';

const App = ({ location }) => {
  const { state, isAuthenticated } = useAuth();
  const redirect = location.pathname.split('/').pop();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirect } });
    }
  }, [isAuthenticated, redirect]);

  return (
    <AppLayout>
      <Router basepath="/app">
        <Dashboard default />
      </Router>
    </AppLayout>
  );
};
export default App;

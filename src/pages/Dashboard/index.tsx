/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React, { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Button } from '@material-ui/core';

import { useAuth } from '../../hooks/auth';

import { Container, Header, Content } from './styles';

import logoImg from '../../assets/logoDashboard.svg';
import illustration from '../../assets/illustration.svg';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const { displayName } = user;

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <Container>
        <Header>
          <img src={logoImg} alt="LaunchTrip" />
          <h1>LaunchTrip</h1>

          <Button
            variant="contained"
            color="inherit"
            startIcon={<FiLogOut size="30px" color="#db345f" />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>
        <Content>
          <div>
            <h2>Welcome</h2>
            <span>{displayName}!</span>
          </div>
          <img src={illustration} alt="Travel" />
        </Content>
      </Container>
    </>
  );
};
export default Dashboard;

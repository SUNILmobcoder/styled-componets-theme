import React from 'react';
import styled from 'styled-components';
import { Login, Signup, Story } from '../components';

const HomePage = () => {
  return (
    <Container>
      <Signup />
      <Login />
      <Story />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  background: ${({theme}) => theme.BACKGROUND};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

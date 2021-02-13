import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Character {
  name: string;
  initiative: number;
}

const Dashboard: React.FC = () => {
  const [initiativeOrder, setInitiativeOrder] = useState<Character[]>([]);

  return (
    <>
      <Header />
      <Container>
        <h1>Alou</h1>
      </Container>
    </>
  );
};

export default Dashboard;

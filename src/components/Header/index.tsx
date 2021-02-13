import React from 'react';

import { Container, Title } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <Title>Initiative App</Title>
    </header>
  </Container>
);

export default Header;

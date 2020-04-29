import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink to="/" exact activeClassName="activeRoute">
            Home
          </NavLink>
          <NavLink to="/import" exact activeClassName="activeRoute">
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;

import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Switch from './Switch';
import Container from './Container';

interface Props {
  toggleTheme: () => void;
}

function Navbar({ toggleTheme }: Props) {
  const Theme = React.useContext(ThemeContext);
  return (
    <StyledNavbar>
      <Container id='NavBar'>
        <h1>Marcus Buer</h1>
        <div>
          <a href='#'>Teste</a>
          <a href='#'>Teste</a>
          <a href='#'>Teste</a>
          <a href='#'>Teste</a>
          <a href='#'>Teste</a>
        </div>
        <div>
          <Switch
            onChange={toggleTheme}
            checked={Theme.title === 'dark'}
            size={30}
            onColor={Theme.colors.primary}
            offColor={Theme.colors.secondary}
          />
          <a href=''>teste</a>
          <a href=''>teste</a>
        </div>
      </Container>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  display: flex;

  #NavBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    cursor: default;
    user-select: none;

    transition: all 0.25s ease;
    :hover {
      transform: scale(1.2);
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  a {
    padding: 0.5rem;
  }
`;

export default Navbar;

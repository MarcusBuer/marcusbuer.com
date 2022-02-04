import React from 'react';
import styled from 'styled-components';
import Container from './Container';

function Navbar() {
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

  div {
    display: flex;
  }

  a {
    padding: 0.5rem;
  }
`;

export default Navbar;

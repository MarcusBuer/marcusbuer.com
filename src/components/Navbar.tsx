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
          <a href='#'>About Me</a>
          <a href='#'>Portfolio</a>
          <a href='#'>Blog</a>
          <a href='#'>Contact</a>
        </div>
        <div>
          <Switch
            onChange={toggleTheme}
            checked={Theme.title === 'dark'}
            size={30}
            onColor={Theme.colors.primary}
            offColor={Theme.colors.secondary}
          />
          <a id='downloadResume' href='#'>
            Resume
          </a>
        </div>
      </Container>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;

  * {
    transition: all 0.25s ease;
  }

  #NavBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    cursor: default;
    user-select: none;

    :hover {
      transform: scale(1.1);
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  a {
    padding: 0.5rem;
    &:hover {
      transform: scale(1.1);
    }
  }
  button {
    margin-right: 1rem;
    &:hover {
      transform: scale(1.1);
    }
  }
  #downloadResume {
    border-radius: 10px;
    padding: 0.25rem;
    margin: 0.25rem;
    border: 1px solid ${props => props.theme.colors.navbar.download};
    color: ${props => props.theme.colors.navbar.download};

    &:hover {
      background: ${props => props.theme.colors.navbar.downloadHover};
      color: ${props => props.theme.colors.navbar.donwloadActive};
    }
  }
`;

export default Navbar;

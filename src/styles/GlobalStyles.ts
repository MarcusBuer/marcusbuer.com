import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  body {
    font-family: var(--font-main);
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: var(--transition);

    :hover {
      color: ${props => props.theme.colors.quaternary};
    }
  }
`;

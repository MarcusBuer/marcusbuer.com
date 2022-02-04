import React from 'react';
import UsePersistentState from '../hooks/usePersistentState';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';

import LightTheme from '../styles/themes/light';
import DarkTheme from '../styles/themes/dark';

import Navbar from '../components/Navbar';

const App = () => {
  const [theme, setTheme] = UsePersistentState<DefaultTheme>(
    'theme',
    DarkTheme,
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? LightTheme : DarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;

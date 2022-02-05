import React from 'react'
import UsePersistentState from '../hooks/usePersistentState'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

import LightTheme from '../styles/themes/light'
import DarkTheme from '../styles/themes/dark'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  const [theme, setTheme] = UsePersistentState('theme', DarkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? LightTheme : DarkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      {/* <section id='My work'>
        <Container>
          <h2>About me</h2>
        </Container>
      </section>
      <section id='Contact'>
        <Container>
          <h2>About me</h2>
        </Container>
      </section> */}
    </ThemeProvider>
  )
}

export default Home

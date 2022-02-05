import React from 'react'
import UsePersistentState from '../hooks/usePersistentState'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

import LightTheme from '../styles/themes/light'
import DarkTheme from '../styles/themes/dark'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

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
      <About/>
      <Portfolio/>
      <Blog />
      <Contact/>
    </ThemeProvider>
  )
}

export default Home

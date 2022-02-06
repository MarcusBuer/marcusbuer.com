import React from 'react'
import styled from 'styled-components'
import Container from './Container'

function About() {
  return (
    <>
      <StyledAbout id='About'>
        <Container>
          <h2>About me</h2>
        </Container>
      </StyledAbout>
    </>
  )
}

const StyledAbout = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.hero.bg1},
    ${props => props.theme.colors.hero.bg2}
  );
`

export default About

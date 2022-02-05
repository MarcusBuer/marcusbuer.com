import React from 'react'
import styled from 'styled-components'
import Container from './Container'

function Contact() {
  return (
    <>
      <StyledContact id='contact'>
        <Container>
          <h2>Contact</h2>
        </Container>
      </StyledContact>
    </>
  )
}

const StyledContact = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.hero.bg1},
    ${props => props.theme.colors.hero.bg2}
  );
`

export default Contact

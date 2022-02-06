import React from 'react'
import styled from 'styled-components'
import Container from './Container'

function Portfolio() {
  return (
    <>
      <StyledPortfolio id='Portfolio'>
        <Container>
          <h2>Portfolio</h2>
        </Container>
      </StyledPortfolio>
    </>
  )
}

const StyledPortfolio = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.hero.bg1},
    ${props => props.theme.colors.hero.bg2}
  );
`

export default Portfolio

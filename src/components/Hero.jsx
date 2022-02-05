import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './Container';
import ParticlesBg from 'particles-bg';

function Hero() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <ParticlesBg
        color={theme.colors.hero.lines}
        type='fountain'
        num={10}
        bg={true}
      />
      <StyledHero id='hero'>
        <Container></Container>
      </StyledHero>
      <StyledHero id='teste'>
        <Container>
          <h2>Hero</h2>
        </Container>
      </StyledHero>
    </>
  );
}

const StyledHero = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.hero.bg1},
    ${props => props.theme.colors.hero.bg2}
  );
`;

export default Hero;

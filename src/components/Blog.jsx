import React from 'react'
import styled from 'styled-components'
import Container from './Container'

function Blog() {
  return (
    <>
      <StyledBlog id='Blog'>
        <Container>
          <h2>Blog</h2>
        </Container>
      </StyledBlog>
    </>
  )
}

const StyledBlog = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.hero.bg1},
    ${props => props.theme.colors.hero.bg2}
  );
`

export default Blog

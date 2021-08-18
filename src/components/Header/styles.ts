import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background: #edf2f7;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  ${media.lessThan('medium')`
    justify-content: center;
  `}
`

export const Title = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 6px;
`

export const Nav = styled.nav`
  ${media.lessThan('medium')`
    display: none;
  `}

  ul {
    display: flex;
  }

  li {
    padding: 1em;
    text-decoration: underline;
  }

  a {
    color: #000;
  }
`

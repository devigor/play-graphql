import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  margin-top: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  font-size: 3.75rem;
  line-height: 1rem;
  text-align: center;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    font-size: 2.75rem;
  `}
`

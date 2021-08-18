import { ReactNode } from 'react'
import * as S from './styles'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
)

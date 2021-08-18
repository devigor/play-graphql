import Link from 'next/link'
import * as S from './styles'

export const Header = () => (
  <S.Wrapper>
    <S.Title>CSMGraphQL</S.Title>
    <S.Nav>
      <ul>
        <li>
          <Link href="https://github/devigor/cmsgraphql">Github</Link>
        </li>
        <li>
          <Link href="https://github.com/devigor">Author</Link>
        </li>
      </ul>
    </S.Nav>
  </S.Wrapper>
)

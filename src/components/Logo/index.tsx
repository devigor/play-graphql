import Image from 'next/image'
import * as S from './styles'
import wolfLogo from '../../../public/wolf.png'

function Logo() {
  return (
    <S.Wrapper>
      <Image
        src={wolfLogo}
        alt="A wolf image"
        placeholder="blur"
        width={200}
        height={200}
      />

      <S.Title>Wolf NextJs</S.Title>
    </S.Wrapper>
  )
}

export default Logo

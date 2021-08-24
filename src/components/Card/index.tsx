import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'
import { Photo } from 'pages'

type CardProps = {
  title: string
  coverPhoto: Photo[]
  slug: string
  value: number
}

export const Card = ({ title, value, coverPhoto, slug }: CardProps) => {
  return (
    <S.Wrapper>
      <Image
        src={coverPhoto[0].url}
        loading="lazy"
        alt={title}
        width={224}
        height={336}
      />
      <S.Info>
        <h2>{title}</h2>
        <span>{`R$ ${value},00`}</span>
        <Link href={`/product/${slug}`}>{title}</Link>
      </S.Info>
    </S.Wrapper>
  )
}

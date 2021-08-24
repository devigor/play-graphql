import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Slider } from 'components/Slider'
import { ProductProps } from 'pages/product/[slug]'

export const ProductInfo = ({
  title,
  value,
  description,
  photos
}: ProductProps) => {
  return (
    <>
      <Header />
      <Container>
        <h1>{title}</h1>
        <span>{`R$: ${value},00`}</span>
        <Slider photos={photos} />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Container>
    </>
  )
}

import { Card } from 'components/Card'
import { ProductsProps } from 'pages'
import * as S from './styles'

export const Home = ({ products }: ProductsProps) => {
  return (
    <S.Wrapper>
      {products.map((product, index) => (
        <Card
          key={`${product.productTitle}-${index}`}
          title={product.productTitle}
          slug={product.productSlug}
          value={product.productValue}
          coverPhoto={product.productPhoto}
        />
      ))}
    </S.Wrapper>
  )
}

import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GetAllProductsQuery } from 'graphql/generated/graphql'
import { GET_ALL_PRODUCST } from 'graphql/queries'

import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Home } from 'templates/Home'

export type Photo = {
  url: string
}

export type Product = {
  productTitle: string
  productValue: number
  productSlug: string
  productPhoto: Photo[]
}

export type ProductsProps = {
  products: Product[]
}

export default function Index({ products }: ProductsProps) {
  return (
    <>
      <Header />
      <Container>
        <Home products={products} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await client.request<GetAllProductsQuery>(
    GET_ALL_PRODUCST
  )
  return {
    props: { products }
  }
}

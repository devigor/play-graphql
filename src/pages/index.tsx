import { Container } from 'components/Container'
import { Header } from 'components/Header'
import client from 'graphql/client'
import { GetAllProductsQuery } from 'graphql/generated/graphql'
import { GET_ALL_PRODUCST } from 'graphql/queries'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <p>OI</p>
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

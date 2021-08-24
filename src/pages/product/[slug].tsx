import client from 'graphql/client'
import {
  GetProductsBySlugQuery,
  GetTheTwoInitialProductsQuery
} from 'graphql/generated/graphql'
import { GET_BY_SLUG, GET_INITIAL } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Photo } from 'pages'
import { ProductInfo } from 'templates/Product'

export type ProductProps = {
  title: string
  value: number
  description: string
  photos: Photo[]
}

export default function Product({
  title,
  value,
  description,
  photos
}: ProductProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <ProductInfo
      title={title}
      value={value}
      description={description}
      photos={photos}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await client.request<GetTheTwoInitialProductsQuery>(
    GET_INITIAL,
    { first: 2 }
  )

  // In the array products, get the slug
  const paths = products.map(({ productSlug }) => ({
    params: { slug: productSlug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { product } = await client.request<GetProductsBySlugQuery>(
    GET_BY_SLUG,
    { slug: ctx.params?.slug }
  )

  if (!product) return { notFound: true }

  return {
    props: {
      title: product.productTitle,
      value: product.productValue,
      description: product.productDescription.html,
      photos: product.productPhoto
    }
  }
}

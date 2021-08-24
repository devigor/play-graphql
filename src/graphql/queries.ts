import { gql } from 'graphql-request'

export const GET_ALL_PRODUCST = gql`
  query getAllProducts {
    products {
      productSlug
      productTitle
      productValue
      productSlug
      productPhoto {
        url
      }
    }
  }
`

export const GET_BY_SLUG = gql`
  query getProductsBySlug($slug: String!) {
    product(where: { productSlug: $slug }) {
      productTitle
      productValue
      productSlug
      productPhoto {
        url
      }
      productDescription {
        html
      }
    }
  }
`

export const GET_INITIAL = gql`
  query getTheTwoInitialProducts($first: Int!) {
    products(first: $first) {
      productTitle
      productValue
      productSlug
      productPhoto {
        url
      }
    }
  }
`

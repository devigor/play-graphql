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

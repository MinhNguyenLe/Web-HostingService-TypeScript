import { gql } from "@apollo/client";

export const HOSTING = gql`
  query hosting {
    hosting {
      _id
      SSDMemory
      RAM
      bandwidth
      type
      information
      product {
        _id
        months
        price
      }
    }
  }
`;

export const DOMAINS = gql`
  query domains {
    domains {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

export const CREATE_DOMAIN = gql`
  mutation createDomain(
    $dot: String!
    $information: String!
    $price: Float!
    $months: Int!
    $images: String!
  ) {
    createDomain(
      createDomain: {
        dot: $dot
        information: $information
        price: $price
        months: $months
        images: $images
      }
    ) {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

export const BUY_ONE = gql`
  mutation createUserDomain(
    $nameUrl: String!
    $user: ID!
    $domain: ID!
    $product: ID!
  ) {
    createUserDomain(
      createUserDomain: {
        nameUrl: $nameUrl
        user: $user
        domain: $domain
        product: $product
      }
    ) {
      _id
      userProduct {
        price
        months
        _id
      }
      nameUrl
      dot
    }
  }
`;

export const CREATE_HOSTING = gql`
  mutation createHosting(
    $type: String!
    $bandwidth: String!
    $information: String!
    $RAM: String!
    $SSDMemory: String!
    $price: Float!
    $months: Int!
  ) {
    createHosting(
      createHosting: {
        type: $type
        bandwidth: $bandwidth
        information: $information
        price: $price
        months: $months
        SSDMemory: $SSDMemory
        RAM: $RAM
      }
    ) {
      _id
      RAM
      type
      SSDMemory
      bandwidth
      information
      product {
        _id
        months
        price
      }
    }
  }
`;

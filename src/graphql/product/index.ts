import { DomainType } from "./../../redux/actions/index";
import { gql } from "@apollo/client";

export const HOSTING = gql`
  query hosting {
    hosting {
      _id
      name
      domain
      website
      support
      createdAt
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
    $name: String!
    $domain: String!
    $website: String!
    $support: [String]!
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
        name: $name
        domain: $domain
        website: $website
        support: $support
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
      information
      bandwidth
      name
      domain
      website
      support
      product {
        _id
        months
        price
      }
    }
  }
`;

export const EDIT_HOSTING = gql`
  mutation editHosting(
    $id: ID!
    $name: String!
    $domain: String!
    $website: String!
    $support: [String]!
    $type: String!
    $bandwidth: String!
    $information: String!
    $RAM: String!
    $SSDMemory: String!
    $price: Float!
    $months: Int!
  ) {
    editHosting(
      editHosting: {
        _id: $id
        name: $name
        domain: $domain
        website: $website
        support: $support
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
      information
      bandwidth
      name
      domain
      website
      support
      product {
        _id
        months
        price
      }
    }
  }
`;

export const DELETE_HOSTING = gql`
  # params input from FE {id}
  mutation deleteHosting($id: ID!) {
    deleteHosting(deleteHosting: { _id: $id }) {
      # params input to graphQL {_id}
      _id
      RAM
      type
      SSDMemory
      information
      bandwidth
      name
      domain
      website
      support
      product {
        _id
        months
        price
      }
    }
  }
`;

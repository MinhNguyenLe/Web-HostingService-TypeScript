import { gql } from "@apollo/client";

export const BUY_ALL = gql`
  mutation buyAllProduct(
    $user: ID!
    $domain: [BuyDomain]!
    $hosting: [ID]!
    $vps: [ID]!
    $server: [ID]!
  ) {
    buyAllProduct(
      user: $user
      domain: $domain
      hosting: $hosting
      vps: $vps
      server: $server
    ) {
      _id
      password
      email
      listIdProduct {
        price
        months
        type
        _id
        type
        createdAt
      }
      createdAt
      isPermission
      userName
    }
  }
`;

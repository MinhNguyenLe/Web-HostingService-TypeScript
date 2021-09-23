import { gql } from "@apollo/client";

export const BUY_ALL = gql`
  mutation buyAllProduct(
    $user: ID!
    $domain: [BuyDomain]
    $hosting: [BuyHosting]
  ) {
    buyAllProduct(user: $user, domain: $domain, hosting: $hosting) {
      _id
      listIdProduct {
        _id
      }
    }
  }
`;

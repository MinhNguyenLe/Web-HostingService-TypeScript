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

export const USER_DOMAIN_BUYER = gql`
  mutation getUserDomainBuyer($id: ID!) {
    getUserDomainBuyer(id: $id) {
      _id
      dot
      nameUrl
      idUserProduct {
        _id
        price
        months
        type
        createdAt
      }
    }
  }
`;

export const USER_HOSTING_BUYER = gql`
  mutation getUserHostingBuyer($id: ID!) {
    getUserHostingBuyer(id: $id) {
      _id
      SSDMemory
      type
      RAM
      bandwidth
      website
      name
      support
      idUserProduct {
        _id
        price
        months
        type
        createdAt
      }
    }
  }
`;

export const USER_VPS_BUYER = gql`
  mutation getUserVPSBuyer($id: ID!) {
    getUserVPSBuyer(id: $id) {
      _id
      CPU
      cloudStorage
      RAM
      type
      name
      support
      idUserProduct {
        _id
        price
        months
        type
        createdAt
      }
    }
  }
`;

export const USER_SERVER_BUYER = gql`
  mutation getUserServerBuyer($id: ID!) {
    getUserServerBuyer(id: $id) {
      _id
      HDD
      SSD
      CPU
      RAM
      bandwidth
      type
      name
      support
      idUserProduct {
        _id
        price
        months
        type
        createdAt
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password }) {
      _id
      token
      password
      email
      listIdProduct {
        price
        months
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

export const REGISTER = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    $quantity: Int!
    $contact: String!
  ) {
    register(
      register: {
        userName: $userName
        email: $email
        password: $password
        quantity: $quantity
        contact: $contact
      }
    ) {
      _id
      token
      password
      email
      listIdProduct {
        price
        months
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

export const USER = gql`
  query users {
    users {
      _id
      createdAt
      password
      email
      isPermission
      userName
      listIdProduct {
        price
        createdAt
        months
        _id
        type
      }
      buyer {
        _id
        name
        information
        contact
        quantity
        createdAt
      }
    }
  }
`;

export const BUYER = gql`
  query buyers {
    buyers {
      _id
      name
      information
      contact
      quantity
      createdAt
      user {
        _id
        createdAt
        password
        email
        isPermission
        userName
      }
    }
  }
`;

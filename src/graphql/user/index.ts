import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password }) {
      _id
      user {
        userName
        email
        password
        isPermission
        _id
      }
      name
      typeBuyer
      quantity
      createdAt
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    $quantity: Int!
    $name: String!
  ) {
    register(
      register: {
        userName: $userName
        email: $email
        password: $password
        quantity: $quantity
        name: $name
      }
    ) {
      _id
      user {
        userName
        email
        password
        isPermission
        _id
      }
      name
      typeBuyer
      quantity
      createdAt
      token
    }
  }
`;

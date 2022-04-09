import { gql } from '@apollo/client';

export const LOGIN_TECH = gql`
  mutation loginTech($email: String!, $password: String!) {
    loginTech(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;








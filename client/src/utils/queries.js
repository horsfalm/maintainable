import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    meTech {
      _id
      username
      email
    }
  }
`;



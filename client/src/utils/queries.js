import { gql } from '@apollo/client';

export const QUERY_CUSTOMERS = gql`
  query {
    customers {
      _id
      name
      address
      phone
    }
  }
`;

export const QUERY_CUSTOMER = gql`
  query getCustomer($_id: ID!) {
    customer(_id: $_id) {
      _id
      name
      address
      phone
      acs {
        _id
        acName
        acBrand
        outModel
        outSerial
        inModel
        inSerial
        createdAt
      }
    }
  }
`;
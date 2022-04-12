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
        reports {
          _id
        }
      }
    }
  }
`;


export const QUERY_AC = gql`
query getAc($_id: ID!) {
  ac(_id: $_id) {
    _id
    acName
    acBrand
    outModel
    outSerial
    inModel
    inSerial
    createdAt
    reports {
      _id
      reportText
      createdAt
    }
  }
}
`;

export const QUERY_REPORTS = gql`
query {
  reports {
    _id
    reportText
    createdAt
  }
}
`;

export const QUERY_REPORT = gql`
query getReport($_id: ID!) {
  report(_id: $_id) {
    _id
    reportText
    createdAt
  }
}
`;
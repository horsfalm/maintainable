import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_AC = gql`
    mutation addAc($customerId: ID!, $acName: String!, $acBrand: String!, $outModel: String!, $outSerial: String!, $inModel: String!, $inSerial: String!) {
        addAc(customerId: $customerId, acName: $acName, acBrand: $acBrand, outModel: $outModel, outSerial: $outSerial, inModel: $inModel, inSerial: $inSerial) {
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
`;

export const ADD_REPORT = gql`
  mutation addReport($acId: ID!, $reportText: String!) {
    addReport(acId: $acId, reportText: $reportText) {
      _id
      reportText
      createdAt
    }
  }
`;

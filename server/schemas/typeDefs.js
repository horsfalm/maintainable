const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Technician {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    technicians: [Technician]
  }

  type Mutation {
    addTechnician(username: String!, email: String!): Technician
  }
`;

module.exports = typeDefs;

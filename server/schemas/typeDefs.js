const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}

type Customer {
    _id: ID
    name: String
    address: String
    phone: String
    acs: [Ac]
}

type Ac {
    _id: ID
    acName: String
    acBrand: String
    outModel: String
    outSerial: String
    inModel: String
    inSerial: String
    createdAt: String
}

type User {
    _id: ID
    username: String
    email: String
}

type Query {
    me: User
    customers: [Customer]
    customer(_id: ID!): Customer
    acs: [Ac]
    ac(_id: ID!): Ac
    users: [User]
    user(username: String!): User
}

type Mutation {
    login(email: String! password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCustomer(name: String!, address: String!, phone: String!): Customer
    addAc(customerId:ID!, acName: String!, acBrand: String!, outModel: String!, outSerial: String!, inModel: String!, inSerial: String!): Ac
}
`;

module.exports = typeDefs;
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Tech {
    _id: ID
    username: String
    email: String
  }
  type Employee {
    _id: ID
    username: String
    email: String
  }
  type Customer {
    _id: ID
    username: String
    email: String
    phonenumber:String
    streetname:String
    city:String
    region:String
    postCode:String
    acs: [Ac]
  }
  type Ac {
    _id: ID
    createdAt: String
    inDoorAcBarnd: String,
    inDoorModel:String,
    inDoorserialNumber: String,
    outDoorAcBarnd: String,
    outDoorModel:String,
  outDoorserialNumber: String,
   
  }
  type Auth{
    token: ID!
    tech: Tech
    employee: Employee
    customer: Customer
    ac : Ac
  }
  
  type Query{
    meTech: Tech
    meEmployee: Employee
   
    acs:[Ac]
    ac(_id: ID!): Ac
   
    techs: [Tech]
    techByName(username: String!): Tech
    techById(_id: ID!): Tech

    employees:[Employee]
    employeeByName(username: String!): Employee
    employeeById(_id: ID!): Employee

    customers:[Customer]
    customerByName(username: String!): Customer
    customerById(_id: ID!): Customer


  
  }

  type Mutation {
    loginTech(email: String!, password: String!): Auth
    loginEmployee(email: String!, password: String!): Auth
    addTech(username: String!, email: String!, password: String!): Auth
    addEmployee(username: String!, 
                email: String!, 
                password: String!): Auth
    addCustomer(username: String!, 
                email: String!, 
                phonenumber:String!, 
                streetname:String!, 
                city:String!, 
                region:String!, 
                postCode:String!): Auth
    addAc(customerId:ID!,
          inDoorAcBarnd: String!,
          inDoorModel:String!,
          inDoorserialNumber: String!,
          outDoorAcBarnd: String!,
          outDoorModel: String!,
          outDoorserialNumber: String!): Auth

  }
`;

// export the typeDefs
module.exports = typeDefs;
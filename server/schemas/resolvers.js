const { Tech, Employee, Customer,Ac} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      meTech: async (parent, args, context) => {
        if (context.tech) {
          const techData = await Tech.findOne({ _id: context.tech._id })
            .select('-__v -password')
           
  
          return techData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      // get all techss
      techs: async () => {
        return Tech.find()
          .select('-__v -password')
         
      },
      // get a tech by username
      techByName: async (parent, { username }) => {
        return Tech.findOne({ username })
          .select('-__v -password')
         
      },
      techById: async (parent, { _id }) => {
        return Tech.findOne({ _id })
          .select('-__v -password')
         
      },
      meEmployee: async (parent, args, context) => {
        if (context.employee) {
          const employeeData = await Employee.findOne({ _id: context.employee._id })
            .select('-__v -password')
           
  
          return employeeData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      // get all Employees
      employees: async () => {
        return Employee.find()
          .select('-__v -password')
         
      },
      // get a Employee by username
      employeeByName: async (parent, { username }) => {
        return Employee.findOne({ username })
          .select('-__v -password')
         
      },
      employeeById: async (parent, { _id }) => {
        return Employee.findOne({ _id })
          .select('-__v -password')
         
      },
      
      // get all Customer
      customers: async () => {
        return Customer.find()
          .select('-__v -password')
         
      },
      // get a Customer by username
      customerByName: async (parent, { username }) => {
        return Customer.findOne({ username })
          .select('-__v -password')
         
      },
      customerById: async (parent, { _id }) => {
        return Customer.findOne({ _id })
          .select('-__v -password')
         
      },
      
      acs: async () => {
        
        return Ac.find().sort({ createdAt: -1 })
        .select('-__v -password')
      },
      ac: async (parent, { _id }) => {
        return Ac.findOne({ _id });
      }
    },
    Mutation: {
      addTech: async (parent, args) => {
        const tech = await Tech.create(args);
        const token = signToken(tech);
        return {token, tech};
      },
      addEmployee: async (parent, args) => {
        const employee = await Employee.create(args);
        const token = signToken(employee);
        return {token, employee};
      },
      addCustomer: async (parent, args) => {
        const customer = await Customer.create(args);
        const token = signToken(customer);
        return {token, customer};
      },
      addAc: async (parent, args) => {
      
        console.log("Args", args);
        const custome = await Customer.findById({_id: args.customerId})
       //  console.log("Customer", customer);
           const ac = await Ac.create({ ...args });
   
           await Customer.findByIdAndUpdate(
             { _id: custome._id },
            { $push: { acs:ac._id } },
             { new: true }
           );
   
           return ac;
       },
      loginTech: async (parent, { email, password }) => {
        const tech = await Tech.findOne({ email });
      
        if (!tech) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await tech.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(tech);
        return {token, tech};
      },
      loginEmployee: async (parent, { email, password }) => {
        const employee = await Employee.findOne({ email });
      
        if (!employee) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await employee.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(employee);
        return {token, employee};
      },
     
    }
    
  };
  // export the resolvers

  module.exports = resolvers;
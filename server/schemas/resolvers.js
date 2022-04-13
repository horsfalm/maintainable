const { User, Customer, Ac, Report } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        customers: async () => {
            return Customer.find().sort({ name: -1 }).populate('acs').populate('reports');
        },
        customer: async (parent, { _id }) => {
            return Customer.findOne({ _id }).populate('acs')
        },
        acs: async () => {
            return Ac.find().sort({ createdAt: -1 }).populate('reports').sort({ createdAt: -1 })
        },
        ac: async (parent, { _id }) => {
            return Ac.findOne({ _id }).populate('reports').sort({ createdAt: -1 })
        },
        reports: async () => {
            return Report.find().sort({ createdAt: -1 })
        },
        report: async (parent, { _id }) => {
            return Report.findOne({ _id }).sort({ createdAt: -1 })
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
        },
        me: async (parent, args, context) => {
            if (context.user) {
            const userData = await User.findOne({_id: context.user._id})
            .select('-__v -password');

            return userData;
        }

        throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addCustomer: async (parent, args, context) => {
            if (context.user) {
                const customer = await Customer.create({ ...args })

                return customer;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        addAc: async (parent, args, context) => {
            if (context.user) {
                const customer = await Customer.findById({_id: args.customerId})
                const ac = await Ac.create({ ...args });

                await Customer.findByIdAndUpdate({ _id: customer._id }, { $push: { acs:ac._id } }, { new: true });

                return ac;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        addReport: async (parent, args, context) => {
            if (context.user) {
                const ac = await Ac.findById({_id: args.acId})
                const report = await Report.create({ ...args });

                await Ac.findByIdAndUpdate({ _id: ac._id }, { $push: { reports:report._id } }, { new: true });

                return report;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        removeReport: async (parent, args, context) => {
            if (context.user) {
                const report = await Report.findById({_id: args._id});

                await Report.findByIdAndDelete({_id: report._id});

            }

            throw new AuthenticationError('You need to be logged in');
        }
    }
};

module.exports = resolvers;
const { Technician } = require('../models');

const resolvers = {
  Query: {
    technicians: async () => {
      return Technician.find({});
    },
  },

  Mutation: {
    addTechnician: async (parent, args) => {
      const user = await Technician.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

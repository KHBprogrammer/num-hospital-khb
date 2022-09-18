const { merge } = require("lodash");

const { userSchema, userResolvers } = require("./schemas/user/user");

const schemas = [userSchema];

const resolvers = merge(userResolvers);

module.exports = {
  schemas,
  resolvers,
};

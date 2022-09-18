const { merge } = require('lodash');
const {
	patientSchema,
	patientResolvers,
} = require('./schemas/patient/patient');

const { userSchema, userResolvers } = require('./schemas/user/user');

const schemas = [userSchema, patientSchema];

const resolvers = merge(userResolvers, patientResolvers);

module.exports = {
	schemas,
	resolvers,
};

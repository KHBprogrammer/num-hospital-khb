const { merge } = require('lodash');
const {
	inspectionSchema,
	inspectionResolvers,
} = require('./schemas/inspection/inspection');
const {
	patientSchema,
	patientResolvers,
} = require('./schemas/patient/patient');

const { userSchema, userResolvers } = require('./schemas/user/user');
const { vitalResolvers, vitalSchema } = require('./schemas/vital/vital');

const schemas = [userSchema, patientSchema, inspectionSchema, vitalSchema];

const resolvers = merge(
	userResolvers,
	patientResolvers,
	inspectionResolvers,
	vitalResolvers
);

module.exports = {
	schemas,
	resolvers,
};

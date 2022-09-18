const { gql } = require('apollo-server-express');

const patientSchema = gql`
	extend type Query {
		patients: [Patient]
		patientDetail(_id: ID!): Patient
	}

	extend type Mutation {
		createPatient(
			education: String
			first_name: String
			gender: String
			khoroo: String
			last_name: String
			reg_no: String
			sisi: String
			work: String
			status: String
		): Patient
		updatePatient(_id: ID!): Patient
		deletePatient(_id: ID): ID
	}

	type Patient {
		_id: ID
		created_at: Date
		education: String
		first_name: String
		gender: String
		khoroo: String
		last_name: String
		reg_no: String
		sisi: String
		work: String
		status: String
	}
`;

const patientResolvers = {
	Query: {
		patients: require('../../queries/patient/patients'),
		patientDetail: require('../../queries/patient/patientDetail'),
	},
	Mutation: {
		createPatient: require('../../mutations/patient/createPatient'),
		updatePatient: require('../../mutations/patient/updatePatient'),
		deletePatient: require('../../mutations/patient/deletePatient'),
	},
};

module.exports = { patientSchema, patientResolvers };

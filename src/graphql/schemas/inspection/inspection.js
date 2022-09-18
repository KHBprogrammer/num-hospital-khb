const { gql } = require('apollo-server-express');

const inspectionSchema = gql`
	extend type Query {
		inspections: [Inspection]
		inspectionDetail(_id: ID!): Inspection
	}

	extend type Mutation {
		createInspection(
			created_at: Date
			ambulatory: String
			dianosis: String
			dianosis_reason: String
			desease: String
			desease_reason: String
			inspection: String
			lost_count: Float
			main_diagnosis: String
			note: String
			procedures: String
			question: String
			sent: String
			violence: String
			patient: ID
			user: ID
		): Inspection

		updateInspection(
			_id: ID
			created_at: Date
			ambulatory: String
			dianosis: String
			dianosis_reason: String
			desease: String
			desease_reason: String
			inspection: String
			lost_count: Float
			main_diagnosis: String
			note: String
			procedures: String
			question: String
			sent: String
			violence: String
			patient: ID
			user: ID
		): Inspection

		deleteInspection(_id: ID): ID
	}

	type Inspection {
		_id: ID
		created_at: Date
		ambulatory: String
		dianosis: String
		dianosis_reason: String
		desease: String
		desease_reason: String
		inspection: String
		lost_count: Float
		main_diagnosis: String
		note: String
		procedures: String
		question: String
		sent: String
		violence: String
		patient: Patient
		user: User
	}
`;

const inspectionResolvers = {
	Query: {
		inspections: require('../../queries/inspection/inspections'),
		inspectionDetail: require('../../queries/inspection/inspectionDetail'),
	},
	Mutation: {
		createInspection: require('../../mutations/inspection/createInspection'),
		updateInspection: require('../../mutations/inspection/updateInspection'),
		deleteInspection: require('../../mutations/inspection/deleteInspection'),
	},
};

module.exports = { inspectionSchema, inspectionResolvers };

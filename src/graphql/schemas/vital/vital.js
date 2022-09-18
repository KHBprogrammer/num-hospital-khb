const { gql } = require('apollo-server-express');

const vitalSchema = gql`
	extend type Query {
		vitals: [Vital]
		vitalDetail(_id: ID!): Vital
	}

	extend type Mutation {
		createVital(
			created_at: Date
			blood_pressure: String
			blood_suggar: Float
			heart_sugar: String
			heart_rate: Float
			oxygen_saturaion: Float
			respiration: String
			temperature: Float
			pulse: Float
			breath: Float
			person_height: Float
			person_weight: Float
			pressure_left_additional: String
			pressure_left_average: Float
			pressure_left_deed: Float
			pressure_left_dood: Float
			pressure_right_additional: String
			pressure_right_average: Float
			pressure_right_deed: Float
			pressure_right_dood: Float
			saturation: Float
			uhaan_sanaa: String
		): Vital

		updateVital(
			_id: ID!
			created_at: Date
			blood_pressure: String
			blood_suggar: Float
			heart_sugar: String
			heart_rate: Float
			oxygen_saturaion: Float
			respiration: String
			temperature: Float
			pulse: Float
			breath: Float
			person_height: Float
			person_weight: Float
			pressure_left_additional: String
			pressure_left_average: Float
			pressure_left_deed: Float
			pressure_left_dood: Float
			pressure_right_additional: String
			pressure_right_average: Float
			pressure_right_deed: Float
			pressure_right_dood: Float
			saturation: Float
			uhaan_sanaa: String
		): Vital

		deleteVital(_id: ID): ID
	}

	type Vital {
		_id: ID
		created_at: Date
		blood_pressure: String
		blood_suggar: Float
		heart_sugar: String
		heart_rate: Float
		oxygen_saturaion: Float
		respiration: String
		temperature: Float
		pulse: Float
		breath: Float
		person_height: Float
		person_weight: Float
		pressure_left_additional: String
		pressure_left_average: Float
		pressure_left_deed: Float
		pressure_left_dood: Float
		pressure_right_additional: String
		pressure_right_average: Float
		pressure_right_deed: Float
		pressure_right_dood: Float
		saturation: Float
		uhaan_sanaa: String
	}
`;

const vitalResolvers = {
	Query: {
		vitals: require('../../queries/vital/vitals'),
		vitalDetail: require('../../queries/vital/vitalDetail'),
	},
	Mutation: {
		createVital: require('../../mutations/vital/createVital'),
		updateVital: require('../../mutations/vital/updateVital'),
		deleteVital: require('../../mutations/vital/deleteVital'),
	},
};

module.exports = { vitalSchema, vitalResolvers };

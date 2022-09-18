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
			blood_suggar: Number
			heart_sugar: String
			heart_rate: Number
			oxygen_saturaion: Number
			respiration: String
			temperature: Number
			pulse: Number
			breath: Number
			person_height: Number
			person_weight: Number
			pressure_left_additional: String
			pressure_left_average: Number
			pressure_left_deed: Number
			pressure_left_dood: Number
			pressure_right_additional: String
			pressure_right_average: Number
			pressure_right_deed: Number
			pressure_right_dood: Number
			saturation: Number
			uhaan_sanaa: String
		): Vital

		updateVital(
			_id: ID!
			created_at: Date
			blood_pressure: String
			blood_suggar: Number
			heart_sugar: String
			heart_rate: Number
			oxygen_saturaion: Number
			respiration: String
			temperature: Number
			pulse: Number
			breath: Number
			person_height: Number
			person_weight: Number
			pressure_left_additional: String
			pressure_left_average: Number
			pressure_left_deed: Number
			pressure_left_dood: Number
			pressure_right_additional: String
			pressure_right_average: Number
			pressure_right_deed: Number
			pressure_right_dood: Number
			saturation: Number
			uhaan_sanaa: String
		): Vital

		deleteVital(_id: ID): ID
	}

	type Vital {
		_id: ID
		created_at: Date
		blood_pressure: String
		blood_suggar: Number
		heart_sugar: String
		heart_rate: Number
		oxygen_saturaion: Number
		respiration: String
		temperature: Number
		pulse: Number
		breath: Number
		person_height: Number
		person_weight: Number
		pressure_left_additional: String
		pressure_left_average: Number
		pressure_left_deed: Number
		pressure_left_dood: Number
		pressure_right_additional: String
		pressure_right_average: Number
		pressure_right_deed: Number
		pressure_right_dood: Number
		saturation: Number
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

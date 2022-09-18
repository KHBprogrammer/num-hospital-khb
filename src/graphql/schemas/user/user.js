const { gql } = require('apollo-server-express');

const userSchema = gql`
	scalar Date
	type Query {
		me: User
	}

	type Mutation {
		createUser(
			username: String!
			address: String!
			first_name: String!
			gender: String!
			last_name: String!
			password: String!
			reg_no: String!
			# user, admin, doctor
			role: String!
		): User
		updateUser(_id: ID!): User
		deleteUser(_id: ID): ID
		login(username: String!, password: String!): String
	}

	type User {
		_id: ID
		username: String
		created_at: Date
		address: String
		first_name: String
		gender: String
		last_name: String
		password: String
		reg_no: String
		role: String
	}
`;

const userResolvers = {
	Query: {
		me: require('../../queries/user/me'),
	},
	Mutation: {
		createUser: require('../../mutations/user/createUser'),
		updateUser: require('../../mutations/user/updateUser'),
		deleteUser: require('../../mutations/user/deleteUser'),
		login: require('../../mutations/user/login'),
	},
};

module.exports = { userSchema, userResolvers };

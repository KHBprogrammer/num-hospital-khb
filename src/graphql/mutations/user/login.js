const { generateTokenFromUser } = require('../../../utils/token');
const bcrypt = require('bcryptjs');
const { UserInputError } = require('apollo-server-express');
const { User } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	const password = args.password;
	const user = await User.findOne({ username: args.username });
	if (!user) throw new UserInputError('not.found');
	else {
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) throw new UserInputError('incorrect.password');
		else {
			const token = generateTokenFromUser(user);
			return token;
		}
	}
};

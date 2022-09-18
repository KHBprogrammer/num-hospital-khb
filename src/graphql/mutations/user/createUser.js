const { User } = require('../../../model/model');
const bcrypt = require('bcryptjs');

module.exports = async function (parent, args, context, info) {
	const password = bcrypt.hashSync(args.password);
	delete args.password;
	const user = await User({ ...args, password }).save();
	return user;
};

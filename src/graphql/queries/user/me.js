const { User } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const user = await User.findById(context.user._id);
	return user;
};

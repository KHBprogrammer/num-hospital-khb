const { User } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const user = await User.find(args);

	// console.log("args : ", args);
	// console.log("getUser");
	// console.log(user);
	return user[0];
};

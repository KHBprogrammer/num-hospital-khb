const { Vital } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const vital = await Vital.findByIdAndDelete(args._id);
	return vital;
};

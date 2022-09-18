const { Vital } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	const vital = await Vital.findOne(args);
	return vital;
};

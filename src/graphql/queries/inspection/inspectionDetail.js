const { Inspection } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	const inspection = await Inspection.findOne(args);
	return inspection;
};

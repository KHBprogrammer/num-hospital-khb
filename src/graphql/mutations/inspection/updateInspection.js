const { Inspection } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const inspection = await Inspection.findByIdAndUpdate(args.id, args);

	return inspection;
};

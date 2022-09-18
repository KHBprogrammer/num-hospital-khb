const { Inspection } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const inspection = await Inspection.findByIdAndDelete(args._id);

	return inspection;
};

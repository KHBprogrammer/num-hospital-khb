const { Inspection } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	const dateBegin = args.dateBegin;
	const dateEnd = args.dateEnd;

	delete args.dateBegin;
	delete args.dateEnd;

	const dateFilter =
		dateBegin || dateEnd
			? {
					created_at: {
						...(dateBegin ? { $gte: dateBegin } : {}),
						...(dateEnd ? { $lte: dateEnd } : {}),
					},
			  }
			: {};

	const inspection = await Inspection.find({ ...args, ...dateFilter }).populate(
		'user patient'
	);

	return inspection;
};

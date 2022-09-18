const {  Vital } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const vital = await  Vital.findByIdAndUpdate(args.id, args);
	return vital;
};

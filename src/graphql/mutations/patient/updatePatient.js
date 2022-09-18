const { Patient } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
	const patient = await Patient.findByIdAndUpdate(args.id, args);
	return patient;
};

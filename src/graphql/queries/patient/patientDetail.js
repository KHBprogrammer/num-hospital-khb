const { Patient } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	const patient = await Patient.findOne(args);
	return patient;
};

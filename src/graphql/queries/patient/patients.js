const { Patient } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	const patient = await Patient.find(args);
	return patient;
};

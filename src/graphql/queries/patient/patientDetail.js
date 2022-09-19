const { Patient } = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
	let reg_noOrSISI = args.reg_noOrSISI;
	delete args.reg_noOrSISI;
	if (reg_noOrSISI) {
		filter = [{ reg_no: reg_noOrSISI }, { sisi: reg_noOrSISI }];
		return await Patient.findOne({ $or: filter, ...args });
	} else return await Patient.findOne(args);
};

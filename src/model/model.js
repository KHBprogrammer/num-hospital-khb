const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
	User: mongoose.model(
		'User',
		new Schema(
			{
				created_at: { type: Date, default: Date.now },
				address: {
					type: String,
					// , required: true
				},
				first_name: {
					type: String,
					// , required: true
				},
				gender: {
					type: String,
					// required: true
				},
				last_name: {
					type: String,
					// , required: true
				},
				password: {
					type: String,
					// , required: true
				},
				reg_no: {
					type: String,
					// , required: true
					unique: true,
				},
				role: {
					type: String,
					// , required: true
				},
				username: {
					type: String,
					// , required: true
					unique: true,
				},
			},
			{ collection: 'user' }
		)
	),

	Patient: mongoose.model(
		'patient',
		new Schema(
			{
				created_at: { type: Date, default: Date.now },
				education: {
					type: String,
					// , required: true
				},
				first_name: {
					type: String,
					// , required: true
				},
				gender: {
					type: String,
					// , required: true
				},
				khoroo: {
					type: String,
					// , required: true
				},
				last_name: {
					type: String,
					// , required: true
				},
				reg_no: {
					type: String,
					// , required: true
					unique: true,
				},
				sisi: {
					type: String,
					// , required: true
				},
				work: {
					type: String,
					// , required: true
				},
				status: {
					type: String,
					// , required: true
				},
			},
			{ collection: 'patient' }
		)
	),

	Inspection: mongoose.model(
		'inspection',
		new Schema(
			{
				created_at: { type: Date, default: Date.now },
				ambulatory: {
					type: String,
					// , required: true
				},
				dianosis: {
					type: String,
					// , required: true
				},
				dianosis_reason: {
					type: String,
					// , required: true
				},
				desease: {
					type: String,
					// , required: true
				},
				desease_reason: {
					type: String,
					// , required: true
				},
				inspection: {
					type: String,
					// , required: true
				},
				lost_count: {
					type: Number,
					// , required: true
				},
				main_diagnosis: {
					type: String,
					// , required: true
				},
				note: {
					type: String,
					// , required: true
				},
				procedures: {
					type: String,
					// , required: true
				},
				question: {
					type: String,
					// , required: true
				},
				sent: {
					type: String,
					// , required: true
				},
				violence: {
					type: String,
					// , required: true
				},
				patient: {
					type: Schema.Types.ObjectId,
					required: true,
					ref: 'patient',
				},
				user: {
					type: Schema.Types.ObjectId,
					// , required: true
					ref: 'user',
				},
			},
			{ collection: 'inspection' }
		)
	),

	Vital: mongoose.model(
		'Vital',
		new Schema(
			{
				created_at: { type: Date, default: Date.now },
				blood_pressure: {
					type: String,
					// , required: true
				},
				blood_suggar: {
					type: Number,
					// , required: true
				},
				heart_sugar: {
					type: String,
					// , required: true
				},
				heart_rate: {
					type: Number,
					// , required: true
				},
				oxygen_saturaion: {
					type: Number,
					// , required: true
				},
				respiration: {
					type: String,
					// , required: true
				},
				temperature: {
					type: Number,
					// , required: true
				},
				pulse: {
					type: Number,
					// , required: true
				},
				breath: {
					type: Number,
					// , required: true
				},
				person_height: {
					type: Number,
					// , required: true
				},
				person_weight: {
					type: Number,
					// , required: true
				},
				pressure_left_additional: {
					type: String,
					// , required: true
				},
				pressure_left_average: {
					type: Number,
					// , required: true
				},
				pressure_left_deed: {
					type: Number,
					// , required: true
				},
				pressure_left_dood: {
					type: Number,
					// , required: true
				},
				pressure_right_additional: {
					type: String,
					// , required: true
				},
				pressure_right_average: {
					type: Number,
					// , required: true
				},
				pressure_right_deed: {
					type: Number,
					// , required: true
				},
				pressure_right_dood: {
					type: Number,
					// , required: true
				},
				saturation: {
					type: Number,
					// , required: true
				},
				uhaan_sanaa: {
					type: String,
					// , required: true
				},
			},
			{ collection: 'inspection' }
		)
	),

	Images: mongoose.model(
		'Images',
		new Schema({
			path: {
				type: String,
				// , required: true
			},
			width: { type: Number },
			height: { type: Number },
		})
	),
};

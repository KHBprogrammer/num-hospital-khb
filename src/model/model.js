const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  User: mongoose.model(
    "User",
    new Schema(
      {
        created_at: { type: Date, default: Date.now },
        address: { type: String },
        first_name: { type: String },
        gender: { type: String },
        last_name: { type: String },
        password: { type: String },
        reg_no: { type: String, unique: true },
        role: { type: String },
        username: { type: String, unique: true }
      },
      { collection: "user" }
    )
  ),

  Patient: mongoose.model(
    "patient",
    new Schema(
      {
        created_at: { type: Date, default: Date.now },
        education: { type: String },
        first_name: { type: String },
        gender: { type: String },
        khoroo: { type: String },
        last_name: { type: String },
        reg_no: { type: String, unique: true },
        sisi: { type: String },
        work: { type: String },
        status: { type: String }
      },
      { collection: "patient" }
    )
  ),

  Inspection: mongoose.model(
    "inspection",
    new Schema(
      {
        created_at: { type: Date, default: Date.now },
        ambulatory: {
          type: String,
          enum: ["анх", "давтан"],
          default: "анх"
        },
        diagnosis: { type: String },
        diagnosis_reason: { type: String },
        desease: { type: String, enum: ["хуучин", "шинэ"], default: "шинэ" },
        desease_reason: { type: String },
        inspection: { type: String },
        lost_count: { type: Number },
        main_diagnosis: { type: String },
        note: { type: String },
        procedures: { type: String },
        question: { type: String },
        sent: { type: Boolean, default: false },
        violence: { type: Boolean, default: false },
        patient: { type: Schema.Types.ObjectId, ref: "patient" },
        user: { type: Schema.Types.ObjectId, ref: "User" }
      },
      { collection: "inspection" }
    )
  ),

  Vital: mongoose.model(
    "Vital",
    new Schema(
      {
        created_at: { type: Date, default: Date.now },
        blood_pressure: { type: String },
        blood_suggar: { type: Number },
        heart_sugar: { type: String },
        heart_rate: { type: Number },
        oxygen_saturaion: { type: Number },
        respiration: { type: String },
        temperature: { type: Number },
        pulse: { type: Number },
        breath: { type: Number },
        person_height: { type: Number },
        person_weight: { type: Number },
        pressure_left_additional: { type: String },
        pressure_left_average: { type: Number },
        pressure_left_deed: { type: Number },
        pressure_left_dood: { type: Number },
        pressure_right_additional: { type: String },
        pressure_right_average: { type: Number },
        pressure_right_deed: { type: Number },
        pressure_right_dood: { type: Number },
        saturation: { type: Number },
        uhaan_sanaa: { type: String }
      },
      { collection: "inspection" }
    )
  ),

  Images: mongoose.model(
    "Images",
    new Schema({
      path: {
        type: String
        // , required: true
      },
      width: { type: Number },
      height: { type: Number }
    })
  )
};

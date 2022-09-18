const DEV = process.env.NODE_ENV == "DEVELOPMENT";
const PORT = process.env.PORT;

module.exports = {
  DEV: DEV,
  PORT: PORT,
  DB_URL: DEV ? process.env.DB_URL : "mongodb://localhost/test",
  JWT_SECRET: process.env.JWT_SECRET,
};

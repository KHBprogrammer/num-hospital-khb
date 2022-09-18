require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const { DEV, PORT, DB_URL } = require("./constants/constants");
const mongoose = require("mongoose");
const cors = require("cors");
const { createServer } = DEV ? require("http") : require("https");
const bodyParser = require("body-parser");
const { apolloServer } = require("./graphql/apollo/apolloServer");

const options = {
  key: DEV ? "" : fs.readFileSync(""),
  cert: DEV ? "" : fs.readFileSync(""),
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
if (DEV) {
  mongoose.set("debug", true);
}

app.use(cors());

apolloServer.applyMiddleware({ app });

const httpServer = createServer(options, app);

apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log("------------------Backend------------------");
  console.log("devmode: " + DEV);
  console.log(`Port: ${PORT}`);
  console.log(
    `Date: ${new Date().toLocaleString("mn-MN", {
      timeZone: "Asia/Ulaanbaatar",
    })}`
  );
  console.log(`Env: ${process.env.NODE_ENV}`);
  console.log("-------------------------------------------------------");
});

const jwt = require('jsonwebtoken');
const { ApolloServer } = require('apollo-server-express');
const { schemas, resolvers } = require('../resolver');
const { DEV, JWT_SECRET } = require('../../constants/constants');

const apolloServer = new ApolloServer({
  uploads: false,
  typeDefs: schemas,
  resolvers: resolvers,
  context: ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    } else {
      // check from req
      const token = req.header('authorization');
      if (token) {
        try {
          const decoded = jwt.verify(token, JWT_SECRET);
          return { user: decoded };
        } catch (err) {
          if (DEV) console.error('JWT: Invalid Token.');
          return { user: null };
        }
      } else {
        if (DEV)
          //console.error("JWT: No Token.");
          return { user: null };
      }
    }
  },
  subscriptions: {
    path: '/subscriptions',
    onConnect: async (connectionParams, webSocket, context) => {
      console.log(
        `Subscription client connected using Apollo server's built-in SubscriptionServer.`
      );
    },
    onDisconnect: async (webSocket, context) => {
      console.log(`Subscription client disconnected.`);
    },
  },
});

module.exports = { apolloServer };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const Resolvers_1 = require("./Resolvers");
const Schema_1 = require("./Schema");
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: Schema_1.typeDefs,
    resolvers: Resolvers_1.resolvers
});
exports.graphqlHandler = server.createHandler();

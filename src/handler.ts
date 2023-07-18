import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./Resolvers";
import { typeDefs } from "./Schema";

const server = new ApolloServer({ 
    typeDefs, 
    resolvers
});

export const graphqlHandler = server.createHandler();

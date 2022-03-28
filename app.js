import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import logger from 'morgan';
import {ApolloServer} from "apollo-server-express";
import {makeExecutableSchema} from '@graphql-tools/schema';
import models from './src/model'
import typeDefs from './src/schema/typedefs';
import resolvers from './src/schema/resolvers';

const app = express();

const PORT = process.env.PORT || 4000;

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const startServer = async () => {
    const server = new ApolloServer({
        schema,
        context: {
            models,
        }

    });
    await server.start();
    server.applyMiddleware({
        app,
        path: '/api/topsong',
    })

}
startServer();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}/api/topsong`)
    });

export {app};

import {ApolloServer, gql} from "apollo-server-express";
import {makeExecutableSchema} from '@graphql-tools/schema';
import typeDefs from "../src/schema/typedefs";
import resolvers from "../src/schema/resolvers";
const schema =  makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = async () => { new ApolloServer({
    schema
});

}
test("Get a single song", async () => {
    const GET_A_SINGLE_SONG = gql`
    query {
        getSong(id: "53209e68-b2c9-404b-8037-5c458be9fc7c") {
            artistName
        }
    }`;
    const {
        data: {getSong}
    } = await server.executeOperation({query: GET_A_SINGLE_SONG});
    expect(getSong).toEqual({name: "Tones and I"})
});
// await server.executeOperation({query: QUERY});
// await server.executeOperation({query: MUTATION});

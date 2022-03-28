export default  `
    type Song {
        id: ID!
        trackName: String!
        artistName: String!
        genre: String!
        danceability: Int
        valence: Int
        popularity: Int
    }
    type Query {
        getSong(id: ID!): Song!
        allSongs: [Song!]!
    }
    type Mutation {
        createSong(trackName: String!, artistName: String!, genre: String!, 
                   danceability: Int, valence: Int, popularity: Int): Song!
        updateSong(id: ID!, trackName: String!, artistName: String!, genre: String!, 
                   danceability: Int, valence: Int, popularity: Int): String
        deleteSong(id: ID!): String
                   
    }
    `;

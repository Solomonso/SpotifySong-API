import {ApolloServer, gql} from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolver";
import {getAllSongs} from "./resolver";

const server = new ApolloServer({
    typeDefs,
    resolvers
});
test('A single song', async () => {

    const GET_A_SINGLE_SONG = gql`
     query GetSong($getSongId: ID!) {
        getSong(id: $getSongId) {
            artistName
        }
    }`;

    const { data: {getSong} } = await server.executeOperation({
        query: GET_A_SINGLE_SONG,
        variables: {getSongId: "53209e68-b2c9-404b-8037-5c458be9fc7c"}
    });
    expect(getSong).toEqual({ artistName: "Tones and I" });
});

test('Song not found', async () => {
    const GET_A_SINGLE_SONG = gql`
     query GetSong($getSongId: ID!) {
        getSong(id: $getSongId) {
            artistName
        }
    }`;

    const { errors: [error] } = await server.executeOperation({
        query: GET_A_SINGLE_SONG,
        variables: {getSongId: "53209e68-b2c9-404b-8037-5c458be9fcs"}
    });
    expect(error.message).toEqual("Song not found!");
})
test('All songs', async () => {
    const GET_ALL_SONGS = gql `
     query AllSongs {
          allSongs {
            id
            artistName
            danceability
            genre
            trackName
            valence
            popularity
          }
        }`;

    const {data: {allSongs} } = await server.executeOperation({
        query: GET_ALL_SONGS
    });
    expect(allSongs).toEqual(getAllSongs());
});

test('Add song', async () => {
    const ADD_SONG = gql`
    mutation CreateSong($id: ID!, $trackName: String!, $artistName: String!, $genre: String!, $danceability: Int, $valence: Int, $popularity: Int) {
          createSon(id: $id, trackName: $trackName, artistName: $artistName, genre: $genre, danceability: $danceability, valence: $valence, popularity: $popularity) {
            artistName
            trackName
          }
        }`;

    const {data: {createSong} } = await server.executeOperation({
        query: ADD_SONG,
        variables: {
            id: "ff0eb786-969c-4125-b2d9-0f61e788202c",
            trackName: "Alot",
            artistName: "21 Savage ft J cole",
            genre: "Rap",
            danceability: 65,
            valence: 78,
            popularity: 99
        }
    });
    expect(createSong).toEqual({artistName: "21 Savage ft J cole", trackName: "Alot"});
});

test('Delete song', async () => {
    const DELETE_SONG = gql`
        mutation DeleteSong($deleteSongId: ID!) {
          deleteSong(id: $deleteSongId) 
        }`;
    const {data: {deleteSong} } = await server.executeOperation({
        query: DELETE_SONG,
        variables: {deleteSongId: "53209e68-b2c9-404b-8037-5c458be9fc7c"}
    });
    expect(deleteSong).toEqual("Deleted Successfully!");
});

test('Delete song failed', async () => {
    const DELETE_SONG = gql`
        mutation DeleteSong($deleteSongId: ID!) {
          deleteSong(id: $deleteSongId) 
        }`;
    const {errors: [error] } = await server.executeOperation({
        query: DELETE_SONG,
        variables: {deleteSongId: "63209788-b2c9-404b-8037-5c458be9fc7er"}
    });
    expect(error.message).toEqual("Delete failed!");
});

test('Update song', async () => {
    const UPDATE_SONG = gql`
        mutation UpdateSong($updateSongId: ID!, $trackName: String!, $artistName: String!, $genre: String!) {
          updateSong(id: $updateSongId, trackName: $trackName, artistName: $artistName, genre: $genre)
        }`;

    const {data: {updateSong} } = await server.executeOperation({
        query: UPDATE_SONG,
        variables: {
            updateSongId: "53209e68-b2c9-404b-8037-5c458be9fc7c",
            trackName: "Mona Lisa",
            artistName: "Lil Wayne ft Kendrick Lamar",
            genre: "Hip Hop"
        }
    });
    expect(updateSong).toEqual("Updated Successfully!");
});

test('Update song failed', async () => {
    const UPDATE_SONG = gql`
        mutation UpdateSong($updateSongId: ID!, $trackName: String!, $artistName: String!, $genre: String!) {
          updateSong(id: $updateSongId, trackName: $trackName, artistName: $artistName, genre: $genre)
        }`;

    const {errors: [error] } = await server.executeOperation({
        query: UPDATE_SONG,
        variables: {
            updateSongId: "ffgg09e68-bdff9-4fs4b-8037-5c458be9fddff",
            trackName: "Mona Lisa",
            artistName: "Lil Wayne ft Kendrick Lamar",
            genre: "Hip Hop"
        }
    });
    expect(error.message).toEqual("Updated Failed!");
});

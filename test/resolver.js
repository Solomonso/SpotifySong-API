const songs = [
    {
        id: "53209e68-b2c9-404b-8037-5c458be9fc7c",
        trackName: "Dance Monkey",
        artistName: "Tones and I",
        genre: "australian pop",
        danceability: 82,
        valence: 54,
        popularity: 83,

    },
    {
        id: "bfb2f3d6-cfcd-43c4-961e-928cc290574c",
        trackName: "Beautiful People (feat. Khalid)",
        artistName: "Shawn Mendes",
        genre: "pop",
        danceability: 64,
        valence: 55,
        popularity: 86
    },
    {
        id: "df3741ff-94c9-4587-a029-cf9f32e954bf",
        trackName: "Goodbyes (Feat. Young Thug)",
        artistName: "Post Malone",
        genre: "dfw rap",
        danceability: 58,
        valence: 18,
        popularity: 94
    },
    {
        id: "cf240631-9b1c-42b0-a843-ee0799dd2dc2",
        trackName: "I Don't Care (with Justin Bieber)",
        artistName: "Ed Sheeran",
        genre: "pop",
        danceability: 80,
        valence: 84,
        popularity: 84
    }
]

export const getAllSongs = () => {
    return songs;
}
export default {
    Query: {
        getSong: (parent, {id}) => {
        const song = songs.find(song => song.id === id);
            if(song) {
                return song;
            } else {
                throw new Error("Song not found!");
            }
        },
        allSongs() {
            return songs;
        },
    },

    Mutation: {
        createSong: (parent, args) => {
            const newSong = args;
            songs.push(newSong);
            return newSong;
        },
        deleteSong: (parent, {id}) => {
            const index = songs.findIndex(song => song.id === id);
            if(index >= 0) {
                songs.splice(index,1);
                return "Deleted Successfully!";
            } else {
                throw new Error("Delete failed!");
            }
        },
        updateSong:  (parent, args) => {
            const song = songs.find(song => song.id === args.id);
            if(song) {
                song.trackName = args.trackName;
                song.artistName = args.artistName;
                song.genre = args.genre;
                song.danceability = args.danceability;
                song.valence = args.valence;
                song.popularity = args.popularity;
                return "Updated Successfully!";
            } else {
                throw new Error("Updated Failed!");
            }
        }

    }
};

export default {
    Query: {
        getSong: (parent, {id}, {models}) => models.song.findOne({where: {id}}),
        allSongs: (parent, args, {models}) => models.song.findAll(),
    },
    Mutation: {
        createSong:  (parent, args, {models}) => models.song.create(args),
        updateSong: async (parent, {id, trackName, artistName, genre, danceability, valence, popularity}, {models}) => {
          try {
           await models.song.update({trackName, artistName, genre, danceability, valence, popularity},
                {where: {id}})
            return "Updated successfully";
          } catch (err) {
              return "Update failed. " + err;
          }
        },
        deleteSong: async(parent, {id}, {models}) => {
            try {
                await models.song.destroy({where: {id}});
                return "Deleted Successfully";
            } catch (err) {
                return "Delete failed. " + err;
            }
        },
    },
};


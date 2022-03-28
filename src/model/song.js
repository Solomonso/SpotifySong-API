export default (sequelize, DataTypes) => {
    return sequelize.define('song', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.uuidv4,
            },
            trackName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            artistName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            danceability: {
                type: DataTypes.INTEGER,
            },
            valence: {
                type: DataTypes.INTEGER,
            },
            popularity: {
                type: DataTypes.INTEGER,
            },
        },
        {
            freezeTableName: true
        });
};

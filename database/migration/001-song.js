export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(
            'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
        );
         await queryInterface.createTable('song', {
             id: {
                 autoIncrement: false,
                 primaryKey: true,
                 type: Sequelize.UUID,
                 defaultValue: Sequelize.literal('uuid_generate_v4()'),
             },
             trackName: {
                 type: Sequelize.STRING,
                 allowNull: false,
             },
             artistName: {
                 type: Sequelize.STRING,
                 allowNull: false,
             },
             genre: {
                 type: Sequelize.STRING,
                 allowNull: false,
             },
             danceability: {
                 type: Sequelize.INTEGER,
             },
             valence: {
                 type: Sequelize.INTEGER,
             },

             popularity: {
                 type: Sequelize.INTEGER,
             },
             createdAt: {
                 allowNull: false,
                 type: Sequelize.DATE,
                 defaultValue: Sequelize.NOW,
             },
             updatedAt: {
                 allowNull: false,
                 type: Sequelize.DATE,
                 defaultValue: Sequelize.NOW,
             },
         });
    },

    down(queryInterface) {
        return queryInterface.dropTable('song');
    },
};

import Sequelize from 'sequelize'

const dbConfig = require('../config/sequelize');

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

let sequelize;
if(config.url) {
    sequelize = new Sequelize(config.url, config);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {
    song: sequelize.import('./song'),
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;

export default models

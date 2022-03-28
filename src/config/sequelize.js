require('dotenv')
    .config();
module.exports = {
    local: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
};

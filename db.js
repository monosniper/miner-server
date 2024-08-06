const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    // 'fc404394_miner',
    // 'fc404394_miner',
    // 'X)&2h9rDz9',
    // {
    //     host: 'fc404394.mysql.tools',
    //     dialect: 'mysql',
    // },

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
);

module.exports = sequelize
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    // 'fc404394_miner',
    // 'fc404394_miner',
    // 'X)&2h9rDz9',
    // {
    //     host: 'fc404394.mysql.tools',
    //     dialect: 'mysql',
    // },

    'vanya_miner_soft',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    },
);

module.exports = sequelize
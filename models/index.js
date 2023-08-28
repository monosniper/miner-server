const User = require('./user')
const Nft = require('./nft')
const { Model } = require("sequelize");
const sequelize = require("../db");

class UserNft extends Model {}
const UserNftThrough = UserNft.init({}, {
    sequelize,
    tableName: 'user_nfts'
});

User.belongsToMany(Nft, { through: UserNftThrough })
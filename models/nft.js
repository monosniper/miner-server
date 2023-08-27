const db = require('../db')
const {DataTypes, UUIDV4, DATE, Model} = require('sequelize')

class Nft extends Model {}

const model = Nft.init({
    id: {
	type: DataTypes.INTEGER,
	primaryKey: true,
	autoIncrement: true,
    },
    name: {
	type: DataTypes.STRING(255),
    },
    price: {
	type: DataTypes.DOUBLE,
    },
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
}, {
    sequelize: db,
    tableName: 'nfts',
    timestamps: true,
    underscored: true
})

module.exports = model
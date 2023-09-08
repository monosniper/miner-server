const db = require('../db')
const {DataTypes, UUIDV4, DATE, Model} = require('sequelize')

class User extends Model {}

const model = User.init({
    id: {
	type: DataTypes.INTEGER,
	primaryKey: true,
	autoIncrement: true,
    },
    key: {
	type: DataTypes.STRING(255),
	unique: true,
    },
    type: {
	type: DataTypes.ENUM('miner', 'nft'),
    },
    balance: {
	type: DataTypes.JSON,
	defaultValue: "{}"
    },
    balance_nft: {
	type: DataTypes.DOUBLE,
	defaultValue: 0,
    },
    premium: {
	type: DataTypes.BOOLEAN,
	defaultValue: false,
    },
    isFirstStart: {
	type: DataTypes.BOOLEAN,
	defaultValue: true,
    },
    isDemo: {
	type: DataTypes.BOOLEAN,
	defaultValue: false,
    },
    isDemoExpired: {
	type: DataTypes.BOOLEAN,
	defaultValue: false,
    },
    from_name: {
	type: DataTypes.STRING(255),
    },
    experience: {
	type: DataTypes.INTEGER,
	defaultValue: 0,
    },
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
}, {
    sequelize: db,
    tableName: 'users',
    timestamps: true,
    underscored: true
})

module.exports = model
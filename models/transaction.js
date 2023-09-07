const db = require('../db')
const {DataTypes, UUIDV4, DATE, Model} = require('sequelize')

class Transaction extends Model {}

const model = Transaction.init({
    id: {
	type: DataTypes.INTEGER,
	primaryKey: true,
	autoIncrement: true,
    },
    transaction_id: {
	type: DataTypes.STRING(255),
	unique: true,
    },
    telegram_id: {
	type: DataTypes.STRING(255),
    },
    type: {
	type: DataTypes.ENUM('miner', 'nft'),
    },
    isAccepted: {
	type: DataTypes.BOOLEAN,
	defaultValue: false,
    },
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
}, {
    sequelize: db,
    tableName: 'transactions',
    timestamps: true,
    underscored: true
})

module.exports = model
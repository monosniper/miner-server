const User = require('./user')
const Nft = require('./nft')

User.hasMany(Nft, { as: 'Nft' })
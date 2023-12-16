const User = require('/User');
const ironblog = require('./ironblog');

User.hasMany(ironblog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

ironblog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, ironblog };
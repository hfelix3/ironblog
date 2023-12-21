const User = require('/User');
const IronBlog = require('./IronBlog');

User.hasMany(IronBlog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

IronBlog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, IronBlog };
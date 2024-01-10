const User = require('./User');
const IronBlog = require('./IronBlog');
const Comment =require('./comment');

IronBlog.hasMany(Comment, {
    foreignKey: 'blog_Id',
    onDelete: 'CASCADE'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

IronBlog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, IronBlog, Comment };
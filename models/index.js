const User = require('../../irontestfile/User');
const IronBlog = require('../../irontestfile/IronBlog');
const Comment = require('../../irontestfile/comment');
const Post = require('../../irontestfile/Post');

IronBlog.hasMany(Comment, {
  foreignKey: 'blog_Id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

IronBlog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = { User, IronBlog, Comment };

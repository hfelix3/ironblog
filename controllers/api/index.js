const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
// const homeRoutes = require('../homeRoutes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
// router.use('/IronBlog', homeRoutes);

module.exports = router;
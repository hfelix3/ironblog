const router = require('express').Router();

const commentRoutes = require('./api/commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/api', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
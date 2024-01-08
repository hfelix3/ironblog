const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/api', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
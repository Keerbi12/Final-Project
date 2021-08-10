const router = require('express').Router();
const userRoutes = require('./user-routes');
const memoryRoutes = require('./memory-routes'); 

router.use('/users', userRoutes);
router.use('/memories', memoryRoutes);

module.exports = router;

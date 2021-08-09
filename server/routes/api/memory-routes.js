const router = require('express').Router();
const { 
    getMemory,
    createMemory,
} = require('../../controllers/memory-controller.js');

// localhost:3001/api/memories/
router.route('/').post(createMemory);
// router.get('/posts', getMemory);
// router.post('/', createMemory);

module.exports = router;

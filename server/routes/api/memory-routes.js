const router = require('express').Router();
const { 
    getMemory,
    createMemory
} = require('../../controllers/memory-controller.js')

// localhost:3001/api/memories/
router.route('/', getMemory);
router.get('/posts', createMemory);

module.exports = router;

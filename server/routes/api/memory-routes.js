const router = require('express').Router();
const { 
    getMemory,
    createMemory
} = require('../../controllers/memory-controller.js')

// localhost:3001/api/memories/
router.get('/', createMemory);
router.get('/posts', getMemory);

module.exports = router;

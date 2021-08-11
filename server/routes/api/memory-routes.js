const router = require('express').Router();
const { 
    test1,
    test2,
    createMemory,
    getMemory,
} = require('../../controllers/memory-controller.js');

// localhost:3001/api/memories/
// router.route('/').post(createMemory);
router.route('/test1').get(test1);
router.route('/test2').get(test2);
router.route('/new').post(createMemory);
router.route('/get').get(getMemory);

// router.get('/posts', getMemory);
// router.post('/', createMemory);

module.exports = router;

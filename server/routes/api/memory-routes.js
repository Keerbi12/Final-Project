const router = require('express').Router();
const { 
    test1,
    createMemory,
    getMemory,
    deleteMemory,
} = require('../../controllers/memory-controller.js');

// 'localhost:3001/api/memories/test1' to see if test works
router.route('/test1').get(test1);
// reads title and description within the new memory box and sends to mongodb atlas, 
router.route('/new').post(createMemory);
// gets the objects within the memorySchema, data from the memory post
router.route('/get').get(getMemory);
// gets the objects within the memorySchema, data from the memory post
// router.route('/delete/:postTitle').delete(deleteMemory);

module.exports = router;

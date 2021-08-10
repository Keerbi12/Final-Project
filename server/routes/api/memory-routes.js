const router = require('express').Router();
const { 
    testRoute1,
    testRoute2,
    createMemory,
} = require('../../controllers/memory-controller.js');


router.route('/').post(createMemory);
// localhost:3001/api/memories/
// router.route('/').get(testRoute2);
// router.get('/posts', getMemory);
// router.post('/', createMemory);
// router.route('/').post(function(req, res) {
//     let newMemory = new Memory({
//         postTitle: req.body.postTitle,
//         postDescription: req.body.postDescription,
//     })
//     newMemory.save();
// })

module.exports = router;

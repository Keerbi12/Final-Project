const router = require('express').Router();
// const { getMemories } = require('../../controllers/memory-controller')


router.get('/', (req, res) => {
    res.send('Success');
});

module.exports = router;

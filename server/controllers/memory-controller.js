// Import the Memory model
const { Memory } = require('../models')

module.exports = {
    async testRoute1(req, res) {
        res.send("Test1")
    },
    async testRoute2(req, res) {
        res.send("Test2")
    },
    async createMemory({ body }, res) {
        const memory = await Memory.create(body);

        if (!memory) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json({ memory });
    },
};

    // Create a new memory
    // async createMemory(req, res) {
    //     const post = req.body;
    //     const newPost = new PostMessage(post)
    //     try {
    //         await newPost.save();
    //         res.status(201).json(newPost);
    //     } catch (error) {
    //         res.status(409),json({ message: error.message })
    //     }
    // },
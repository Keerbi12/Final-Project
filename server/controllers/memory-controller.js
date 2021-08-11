// Import the Memory model
const { Memory } = require('../models');

module.exports = {
    async test1(req, res) {
        res.send("test1")
    },
    async getMemory(req, res) {
        try {
            const  getMemory = await Memory.find();
            res.status(200).json(getMemory)
        } catch (error) {
           res.status(404).json({ message: error.message}) 
        }
    },
    async createMemory({ body }, res) {
        const memory = await Memory.create(body);

        if (!memory) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json({ memory });
    },
};
// Import the Memory model
const { Memory } = require('../models');

module.exports = {
    async test1(req, res) {
        res.send("test1")
    },
    async test2(req, res) {
        res.send("test2")
    },
    async getMemory(req, res) {
        try {
            const  getMemory = await Memory.find();
            console.log(getMemory)
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
    // async getMemory(req, res) {
    //     try {
    //         const memory = await Memory.find();
    //         console.log(memory)

    //         res.status(200).json(memory)
    //     } catch (error) {
    //         res.status(404).json({message: error.message});
    //     }
    // },  
};
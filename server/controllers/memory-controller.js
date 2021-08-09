const Memory = require('../models/Memory.js')

module.exports = {
    async getMemory(req, res) {
        res.send('Success');
    },

    async createMemory(req, res) {
        try {
            const memory = await Memory.find();
            console.log(memory)

            res.status(200).json(memory)
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }   
};
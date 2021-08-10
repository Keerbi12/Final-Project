// // Import the Memory model
// const { Memory } = require('../models');

// module.exports = {
//     // Create a new memory
//     // async createMemory(req, res) {
//     //     const post = req.body;
//     //     const newPost = new PostMessage(post)
//     //     try {
//     //         await newPost.save();
//     //         res.status(201).json(newPost);
//     //     } catch (error) {
//     //         res.status(409),json({ message: error.message })
//     //     }
//     // },

//     async createMemory({ body }, res) {
//         const memory = await Memory.create(body);

//         if (!memory) {
//             return res.status(400).json({ message: 'Something is wrong!' });
//         }
//         res.json({ memory });
//     },

//     async getMemory(req, res) {
//         try {
//             const memory = await Memory.find();
//             console.log(memory)

//             res.status(200).json(memory)
//         } catch (error) {
//             res.status(404).json({message: error.message});
//         }
//     },  
// };
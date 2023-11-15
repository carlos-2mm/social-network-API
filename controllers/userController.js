const { User } = require('../models');

module.exports = {

    // Get all users
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.json(user);
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
    
        },
    
        // Get a single user by ID
        async getSingleUser(req, res){
            try {
                const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('firneds')
                .populate('thoughts');

                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID'})
                }
                res.json(user);
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        },

        // Create a new user
        async createUser(req, res){
            try {
                const user = await User.create(req.body);
                res.json(user)
            } catch (err) {
                res.status(500).json(err);
            }
        },

        // Update a user by its ID
        async updateUser(req, res){
            try {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userID },
                    { $set: { user: req.body } },
                    {runValidators: true, new: true }
                );

                if (!user) {
                    return res.status(404).json({ message: 'No user found with that ID :(' });
                }

                res.json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        },

        // Delete a user by its ID
        async deleteUser(req, res){
            try {
                const user = await User.findOneAndDelete({_id: req.params.userId })

                if (!user){
                    return res.status(404).json({ message: ' No such user exist '});
                }

                res.json({ message: 'User succesfully deleted' });
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        },

        // Add a new friend to a user's friend list
        async addFriend(req, res) {
            console.log('You are adding a friend');
            console.log(req.body);
        
            try {
              const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body } },
                { runValidators: true, new: true }
              );
        
              if (!user) {
                return res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' });
              }
        
              res.json(user);
            } catch (err) {
              res.status(500).json(err);
            }
          },
};
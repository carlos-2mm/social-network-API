const { Schema, Types } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId(),
            default: () => new mongoose.Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: 'You need to enter a reaction',
            minlenght: 1,
            maxlenght: 280,
        },
        username: {
            type: String,
            required: 'You need to enter a username',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);


// Export the reactionSchema
module.exports = reactionSchema;
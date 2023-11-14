const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require('../utils/dateFormat');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: 'You need to enter a thought',
            minlenght: 1,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: 'You need to enter a username'
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Virtual that retrieves the length of the thought's reaction array
thoughtSchema.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

// Create the Thought model using thoughtSchema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;
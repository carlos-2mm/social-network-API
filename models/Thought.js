const { Schema, model } = require("mongoose");

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
        },
        username: {
            type: String,
            required: 'You need to enter a username'
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    },
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
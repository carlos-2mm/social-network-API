const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "You need to enter a reaction",
      minlenght: 1,
      maxlenght: 280,
    },
    username: {
      type: String,
      required: "You need to enter a username",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
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

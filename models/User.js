const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
   {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        , 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
   },
   {
    toJSON: {
        virtuals: true
    }
   }
);

// Virtual that retrieves the length of the user's friends array
userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.lenght;
});

const User = model('user', userSchema);

module.exports = User;

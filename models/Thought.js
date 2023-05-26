// referring to Activity 28 (mini project) and Activity 21
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const format_date = require('../utils/helpers');

// schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        // how would I format date? 
        createdAt: {
            type: Date,
            default: Date.now,
            get: format_date,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
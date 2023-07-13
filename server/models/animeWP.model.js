const mongoose = require('mongoose');

const AnimeWPSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required : [
                true,
                "Anime title is required"
            ],
            minLength: [
                3,
                "Anime title must be at least 3 characters"
            ],
        },
        location: {
            type: String,
            required: [
                true,
                "Watch party location is required"
            ],
        },
        time: {
            type: Date,
            required: [
                true,
                "Watch party time is required"
            ],
        },
        cosplayRequired: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('AnimeWP', AnimeWPSchema)
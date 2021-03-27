const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WaterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    gender: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    current: {
        type: Number,
        required: true
    }
});

module.exports = Water = mongoose.model("waters", WaterSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    superbowls: Number,
    obnoxiousFans: Boolean
}, {timestamps: true});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;

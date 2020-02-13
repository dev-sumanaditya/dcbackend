const mongoose = require('mongoose');

const JoinSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    email: {
        type: String,
        trim: true,
        minlength: 4,
        maxlength: 80
    },
    contact: {
        type: String,
        trim: true,
        minlength: 8,
        maxlength: 13
    },
    country: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    },
    city: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    },
    fieldOfStudy: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    },
    qualification: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    },
    experience: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    },
    skills: {
        type: [],
    },
    resume: {
    },
    timestamp: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    }
})

const join = mongoose.model('join', JoinSchema);

module.exports = join;
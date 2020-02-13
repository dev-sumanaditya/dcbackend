const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80,
        required: true
    },
    email: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 120,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true
    },
    memberId: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    username: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 60,
    },
    contact: {
        type: String,
        trim: true,
        minlength: 9,
        maxlength: 15,
        required: true
    },
    contact2: {
        type: String,
        trim: true,
        minlength: 9,
        maxlength: 15
    },
    role: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 15,
        required: true
    },
    country: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    city: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    lastActive: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
    
})

const member = mongoose.model('member', MemberSchema);

module.exports = member;
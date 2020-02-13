const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    email: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    contact: {
        type: String,
        trim: true,
        minlength: 8,
        maxlength: 13
    },
    type: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 40
    },
    product: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 40
    },
    estSize: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 40
    },
    jobType: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 40
    },
    individual: {
        type: Boolean
    },
    cName: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    },
    query: {
        type: String,
        trim: true,
        maxlength: 500
    },
    timestamp: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 80
    }
    
})

const query = mongoose.model('Query', QuerySchema);

module.exports = query;
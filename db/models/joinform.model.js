const mongoose = require('mongoose');

const JoinSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    id: {
        // type: mongoose.Types.ObjectId,
        type: String,
        required: true
    },
    
})

const join = mongoose.model('join', JoinSchema);

module.exports = join;
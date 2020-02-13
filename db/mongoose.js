const mongoose = require('mongoose');

mongoose.promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/deltacodes', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Database Connected - deltacodes"))
    .catch((error) => console.log(error));

module.exports = mongoose;
const express =  require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('./db/mongoose');
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.PORT || 3000;

const app = express();


// Import Routes
const authRoute = require('./routes/auth');
const appRoute = require('./routes/landing');

// Middlewares
app.use(express.json());
app.use(cors());


// var whitelist = ['http://deltacodes.in', 'http://dcadmin.live']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }


// Route middlewares
app.use('/api/auth', authRoute);
app.use('/api/app', appRoute);





// const query = require('./db/models/clientform.model');
// app.get('/', (req , res) => {
//     query.find({})
//       .then(lists => res.send(lists))
//       .catch((error) => console.log(error));
// })
// app.post('/', (req, res) => {
//   const data = req.body;
//   (new query({
//     'name': data.name,
//     'id': data.id
//   }))
//   .save()
//   .then((list) => { res.send('ok 200 - ' + list) })
//   .catch((error) => {console.log(error);});
// })




app.listen(port, ()=> {
    console.log('\x1b[36m%s\x1b[0m', 'Server running on port : '+ port);
})



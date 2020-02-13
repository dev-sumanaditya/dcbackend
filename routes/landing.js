const router = require('express').Router();
const joi = require('@hapi/joi');

// models
const clientform = require('../db/models/clientform.model');

// query route
const querySchema = joi.object({
    name: joi.string().min(3).max(80).required(),
    email: joi.string().min(6).required().email(),
    contact: joi.string().min(9).max(13).required(),
    type: joi.string().min(2).max(40).required(),
    product: joi.string().min(2).max(40).required(),
    estSize: joi.string().min(2).max(40).required(),
    jobType: joi.string().min(2).max(40).required(),
    individual: joi.boolean().required(),
    cName: joi.string().min(9).max(80),
    query: joi.string().max(500),
    timestamp: joi.string().required()
})

router.post('/query', (req,res) => {
    
    // Validate data
    const { error } = querySchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    (new clientform(req.body))
        .save()
        .then((resp) => { res.send('ok 200 - ' + resp) })
        .catch((error) => {console.log(error); res.status(500).send(error)});
});

router.get('/query', (req,res) => {
    clientform.find({})
       .then(lists => res.send(lists))
       .catch((error) => console.log(error));
})




// join route

router.post('/join', (req,res) => {
    res.send('join post');
})


module.exports = router;

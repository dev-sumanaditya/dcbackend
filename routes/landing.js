const router = require('express').Router();
const joi = require('@hapi/joi');

// models
const clientform = require('../db/models/clientform.model');
const joinform = require('../db/models/joinform.model');

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
    if (error) res.status(400).send(error.details[0].message);
    else {
        (new clientform(req.body))
        .save()
        .then((resp) => { res.send(resp) })
        .catch((error) => {console.log(error); res.status(400).send(error)});
    }
});




// join route

const joinSchema = joi.object({
    name: joi.string().min(3).max(80).required(),  //req
    email: joi.string().min(6).required().email(),  //req
    contact: joi.string().min(8).max(13).required(),
    country: joi.string().min(2).max(80).required(),
    city: joi.string().min(2).max(80).required(),
    fieldOfStudy: joi.string().min(2).max(80).required(),
    qualification: joi.string().min(2).max(80).required(),
    experience: joi.string().min(2).max(80).required(),
    skills: joi.array().required(),
    resume: joi.required(),
    timestamp: joi.string().min(2).max(80).required()
})

router.post('/join', (req,res) => {
    const { error } = joinSchema.validate(req.body);
    if (error) res.status(400).send(error.details[0].message);
    else {
        (new joinform(req.body))
        .save()
        .then((resp) => { res.send(resp) })
        .catch((error) => {console.log(error); res.status(400).send(error)});
    }
})


module.exports = router;

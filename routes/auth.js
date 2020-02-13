const router = require('express').Router();

const member = require('../db/models/member.model');


// Validation
const joi = require('@hapi/joi');

const memberSchema = joi.object({
    name: joi.string().min(3).max(80).required(),  //req
    email: joi.string().min(6).required().email(),  //req
    password: joi.string().min(8).required().max(580),  //req
    memberId: joi.string().min(4).max(20).required(),  //req
    username: joi.string().min(4).max(80).required(),  //req
    contact: joi.string().min(9).max(13).required(), // req
    contact2: joi.string().min(9).max(13),
    role: joi.string().max(40).required(), // req
    country: joi.string().min(3).max(80),
    city: joi.string().min(3).max(80),
    lastActive: joi.string().min(3).max(140),
    status: joi.boolean()
})




router.post('/register', (req,res) => {

    // Validate data
    const { error } = memberSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    (new member(req.body))
        .save()
        .then((resp) => { res.send('ok 200 - ' + resp) })
        .catch((error) => {console.log(error); res.status(500).send(error)});
})

router.post('/login', (req,res) => {
    res.send('login post');
})


module.exports = router;

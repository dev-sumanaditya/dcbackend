const router = require('express').Router();
const bcrypt = require('bcryptjs');

const member = require('../db/models/member.model');

const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');


// Validation
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

const loginSchema = joi.object({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(8).required()
})



// Register route
router.post('/register', async (req,res) => {

    // Validate data
    const { error } = memberSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user already exists
    const emailExists = await member.findOne({email : req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    var data = req.body;
    data.password = hashedPassword;

    (new member(data))
        .save()
        .then((resp) => { res.send('ok 200 - ' + resp) })
        .catch((error) => {console.log(error); res.status(500).send(error)});
})



// Login route
router.post('/login', async (req,res) => {
    
    // validate data
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user exists
    const user = await member.findOne({email : req.body.email});
    if(!user) return res.status(400).send('Email is not registered');

    // verify password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');


    // create and assgn a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});


module.exports = router;

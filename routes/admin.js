const router = require('express').Router();
const verify = require('./verifyToken');

const member = require('../db/models/member.model');

router.get('/', verify, async (req,res) => {
    var user = await member.findOne({_id: req.user._id})
    res.send(user);
});


module.exports = router;
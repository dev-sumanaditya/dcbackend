const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req,res) => {
    res.json({posts: {title: 'some post', description: 'some descrip'}})
});


module.exports = router;
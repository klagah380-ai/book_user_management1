const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const rootDir = require('../util/path');


router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","users.html"));
});

router.get('/add',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","addUsers.html"));
})

router.post('/add',(req,res,next) => {
    console.log("User Name : ",req.body.username)
    console.log("Age : ",req.body.age)
    res.redirect('/users');

});

module.exports = router;
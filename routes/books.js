const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const rootDir = require('../util/path');

const path = require('path');



router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","books.html"));
});

router.get('/add',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","addbook.html"));
});

router.post('/add',(req,res,next) => {
    console.log("Book Name : ", req.body.bookName);
    console.log("Author : ", req.body.author);
    console.log("Genre: ", req.body.genre);
    console.log("Publication Year : ", req.body.year);
    res.redirect('/books');
});


module.exports = router


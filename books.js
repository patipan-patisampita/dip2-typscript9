const express = require("express");
const router = express.Router();

router.get('/books',(req,res)=>{
    console.log("GET /books");
    res.send("GET From Express Router");
});

router.get('/books/:id',(req,res)=>{
    console.log("GET /books/ID");
    res.send(`GET From Express Router GET /books/ID ${req.params.id}`); 
});

router.post('/books',(req,res)=>{
    console.log("POST /books");
    res.send(req.body);
});

module.exports = router;
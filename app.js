const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

const books = require('./books');
app.use('/api/v1',books);

app.get('/',(req,res)=>{
    console.log("Hello 2023");
    res.send("Hello");
});

// app.all('/book',(req,res)=>{
//     console.log("ALL");
//     res.send(req.method);
// });

app.get('/books',(req,res)=>{
    console.log("GET /books");
    res.send("GET /books");
});

app.get('/books/:id',(req,res)=>{
    console.log("GET /books/ID");
    res.send(req.params.id);
});

app.post('/books',(req,res)=>{
    console.log("POST /books");
    res.send(req.body);
});

app.put('/books/:id',(req,res)=>{
    console.log("PUT /books/ID");
    res.send(req.params.id);
});

app.delete('/books/:id',(req,res)=>{
    console.log("DELETE /books/ID");
    res.send(req.params.id);
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});



//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a comment
app.post('/comments', (req, res) => {
  res.send('Comment created');
});

//Read all comments
app.get('/comments', (req, res) => {
    res.send('All comments');
});

//Read a comment
app.get('/comments/:id', (req, res) => {
    res.send('Comment with id ' + req.params.id);
});

//Update a comment
app.put('/comments/:id', (req, res) => {
    res.send('Comment with id ' + req.params.id + ' updated');
});

//Delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Comment with id ' + req.params.id + ' deleted');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


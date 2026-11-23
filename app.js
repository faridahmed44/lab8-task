const express = require('express');
const app = express(); 

app.use(express.json());

const books = [
  { id: 12, title: 'Clean Code', author: 'Robert Martin' },
  { id: 13, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { id: 14, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  { id: 15, title: 'You Don\'t Know JS', author: 'Kyle Simpson' }
];

//see all books
app.get('/books', (req, res) => {
  res.send(books);
});


//get book by id
app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
//   const book = books[id];
const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.send(book);
});


// add a book
app.post('/books', (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

//delete book by id
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));

  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  books.splice(index, 1);
  res.sendStatus(204);
});


app.listen(5000, () => {
  console.log(`Server running on 5000`);
});
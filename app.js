const express = require('express');
const app = express(); 

const books = [
  { id: 12, title: 'Clean Code', author: 'Robert Martin' },
  { id: 13, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { id: 14, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  { id: 15, title: 'You Don\'t Know JS', author: 'Kyle Simpson' }
];
app.get('/books', (req, res) => {
  res.send(books);
});
app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
//   const book = books[id];
const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.send(book);
});


app.listen(5000, () => {
  console.log(`Server running on 5000`);
});
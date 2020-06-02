import express from 'express';

const app = express();

app.get('/users', () => {
  console.log('Listagem');
});

app.listen(3333);
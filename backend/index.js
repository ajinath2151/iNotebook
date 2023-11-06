// const express = require('express');
// const mongoose = require('mongoose');

// // const mongoURL = 'mongodb://localhost:27017/mydb';
// const mongoURL = 'mongodb://127.0.0.1/mydb';

// mongoose.connect(mongoURL);

// const db = mongoose.connection;
// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });
// db.once('open', () => {
//   console.log('Connected to MongoDB successfully.................');
// });

// const app = express();
// const port = 3009;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/auth', require('./routes/auth')) //auth.js
app.use('/api/notes', require('./routes/notes')) //auth.js

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
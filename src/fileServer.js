const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const path = require('path');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/react-login-tut', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Initialize GridFS
let gfs;
db.once('open', () => {
  gfs = Grid(db.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define the route for file uploads
app.post('/upload', upload.single('zipfile'), (req, res) => {
  const { originalname, buffer } = req.file;

  // Create a writable stream to store the file in GridFS
  const writeStream = gfs.createWriteStream({
    filename: originalname,
  });

  writeStream.write(buffer);

  // Handle stream events
  writeStream.on('finish', () => {
    console.log('File saved to MongoDB GridFS');
    res.status(200).send('File uploaded successfully');
  });

  writeStream.end();
});

// Serve uploaded files
app.get('/file/:filename', (req, res) => {
  const { filename } = req.params;

  // Create a readable stream to retrieve the file from GridFS
  const readStream = gfs.createReadStream({ filename });

  // Set the appropriate content type for the response
  res.set('Content-Type', 'application/zip');

  // Pipe the file to the response
  readStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

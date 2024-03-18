const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const UploadSession = require('../models/UploadSession');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

router.get('/upload', (req, res) => {
  res.render('upload');
});

router.post('/api/upload', upload.fields([{ name: 'videoFile' }, { name: 'srtFile' }]), async (req, res) => {
  try {
    const sessionId = uuidv4();
    const videoPath = req.files['videoFile'][0].path;
    const srtPath = req.files['srtFile'][0].path;

    await UploadSession.create({ sessionId, videoPath, srtPath });

    console.log(`Files uploaded successfully. Session ID: ${sessionId}`);
    res.redirect(`/interval-selection/${sessionId}`);
  } catch (error) {
    console.error(`File upload error: ${error.message}`);
    console.error(error.stack);
    res.status(500).send('Error uploading files');
  }
});

module.exports = router;
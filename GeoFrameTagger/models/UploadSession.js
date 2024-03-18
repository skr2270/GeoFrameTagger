const mongoose = require('mongoose');

const uploadSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  videoPath: { type: String, required: true },
  srtPath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const UploadSession = mongoose.model('UploadSession', uploadSessionSchema);

module.exports = UploadSession;
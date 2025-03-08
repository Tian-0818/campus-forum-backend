const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher: { type: String, required: true },
});

module.exports = mongoose.model('Course', CourseSchema);
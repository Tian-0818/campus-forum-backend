// backend/models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  semester: { type: String } // 可选：课程学期
});

module.exports = mongoose.model('Course', CourseSchema);
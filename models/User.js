// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);

// backend/models/Course.js
const CourseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

// backend/models/Review.js
const ReviewSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' }
});
// backend/models/Review.js
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  courseId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  comment: { 
    type: String, 
    maxlength: 500 
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
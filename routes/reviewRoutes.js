const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// 获取某门课程的所有评价
router.get('/:courseId', reviewController.getReviewsByCourse);

// 创建新评价
router.post('/', reviewController.createReview);

module.exports = router;
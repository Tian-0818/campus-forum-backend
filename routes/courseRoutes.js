const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// 获取所有课程
router.get('/', courseController.getAllCourses);

// 创建新课程
router.post('/', courseController.createCourse);

module.exports = router;
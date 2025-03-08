// backend/routes/admin.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware.adminCheck);

// 获取待审核评价
router.get('/reviews/pending', async (req, res) => {
  const reviews = await Review.find({ status: 'pending' });
  res.json(reviews);
});

// 审核通过评价
router.put('/reviews/:id/approve', async (req, res) => {
  await Review.findByIdAndUpdate(req.params.id, { status: 'approved' });
  res.json({ message: 'Review approved' });
});
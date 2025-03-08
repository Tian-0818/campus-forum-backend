const Review = require('../models/Review');

exports.getReviewsByCourse = async (req, res) => {
  try {
    const reviews = await Review.find({ courseId: req.params.courseId });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createReview = async (req, res) => {
  const { courseId, rating, comment } = req.body;

  try {
    const review = new Review({ courseId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
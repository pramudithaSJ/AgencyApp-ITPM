const router = require("express").Router();
const { request } = require("express");
let Review = require("../models/reviewModel");

// add review
// http://localhost:8020/review/add/:agencyId
router.route("/add/:agencyId").post((req, res) => {
  const review = req.body.review;
  const rating = req.body.rating;
  const user = req.body.user;
  const agencyId = req.params.agencyId;

  const newReview = new Review({
    review,
    rating,
    user,
    agency: agencyId,
    date: Date.now(),
  });

  newReview
    .save()
    .then(() => {
      res.json("Review Added Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get reviews by user ID
// http://localhost:8020/review/user/:userId
router.route("/user/:userId").get((req, res) => {
    const userId = req.params.userId;
    
    Review.find({ user: userId })
        .then((reviews) => {
            const reviewObject = {};
            reviews.forEach((review) => {
                reviewObject[review._id] = review;
            });
            res.json(reviewObject);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("An error occurred while retrieving the reviews");
        });
});
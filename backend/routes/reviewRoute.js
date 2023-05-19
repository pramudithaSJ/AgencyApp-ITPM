const router = require("express").Router();
const { request } = require("express");
let Review = require("../models/reviewModel");

// add review
// http://localhost:8020/review/add/:agencyId
router.route("/add/:agencyId").post(async (req, res) => {
  try {
    const { review, rating, userId } = req.body;
    const agencyId = req.params.agencyId;

    const agency = await Review.findById(agencyId);
    // if (!agency) {
    //   return res.status(404).json({ message: "Agency not found" });
    // }

    if (!agency.reviews || agency.reviews.length === 0) {
      // If agency has no reviews or the reviews array is empty, create a new review
      const newReview = new Review({
        reviews: [
          {
            review,
            rating,
            userId,
          },
        ],
        agencyId,
      });
      const savedReview = await newReview.save();
      return res.status(201).json(savedReview);
    } else {
      // If agency already has reviews, add the new review to the existing reviews array
      const newReview = {
        review,
        rating,
        userId,
      };
      agency?.reviews.push(newReview);
      const updatedAgency = await agency.save();
      return res.status(200).json(updatedAgency.reviews);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
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

module.exports = router;

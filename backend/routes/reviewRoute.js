const router = require("express").Router();
const { request } = require("express");
const Review = require("../models/reviewModel");

//add review
//http://localhost:8090/review/add

router.route("/add/:agencyId").post((req, res) => {
  const review = req.body.review;
  const rating = req.body.rating;
  const userId = req.body.userId;
  const agencyId = req.params.agencyId; // Get agencyId from URL parameter

  const newReview = new Review({
    review,
    rating,
    userId,
    agencyId,
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

//fetch reviews
//http://localhost:8090/review/
router.route("/").get((req, res) => {
  Review.find()
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/reviews/:reviewId", (req, res) => {
  const reviewId = req.params.reviewId; // Get reviewId from URL parameter

  Review.findById(reviewId)
    .then((review) => {
      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ error: "Review not found." });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving the review." });
    });
});

router.route("/:userId").get((req, res) => {
  const userId = req.params.userId; // Get userId from URL parameter

  Review.find({ userId })
    .then((reviews) => {
      res.json(reviews);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching reviews." });
    });
});
router.route("/agency/:agencyId").get((req, res) => {
  const agencyId = req.params.agencyId; // Get agencyId from URL parameter

  Review.find({ agencyId })
    .then((reviews) => {
      res.json(reviews);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching reviews." });
    });
});

router.route("/reviews/:reviewId").put((req, res) => {
  const reviewId = req.params.reviewId; // Get reviewId from URL parameter
  const updatedReview = req.body.review;
  const updatedRating = req.body.rating;
  const updatedUserId = req.body.userId;

  Review.findByIdAndUpdate(
    reviewId,
    { review: updatedReview, rating: updatedRating, userId: updatedUserId },
    { new: true }
  )
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while updating the review." });
    });
});
router.delete("/reviews/:reviewId", (req, res) => {
  const reviewId = req.params.reviewId; // Get reviewId from URL parameter

  Review.findByIdAndDelete(reviewId)
    .then((deletedReview) => {
      if (deletedReview) {
        res.json({ message: "Review deleted successfully." });
      } else {
        res.status(404).json({ error: "Review not found." });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the review." });
    });
});
module.exports = router;

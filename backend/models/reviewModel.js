const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  review: {
    type: String,
  },
  rating: {
    type: Number,
  },
  userId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  agencyId: {
    type: String,
  },
});

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;

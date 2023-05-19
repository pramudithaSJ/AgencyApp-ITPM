const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  review: {
    type: String,
  },
  rating: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  agency: {
    type: Schema.Types.ObjectId,
    ref: "agency",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;

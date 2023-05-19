const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});

const CV = mongoose.model("CV", cvSchema);

module.exports = CV;

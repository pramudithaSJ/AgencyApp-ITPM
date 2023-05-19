const multer = require("multer");
const router = require("express").Router();
const { request } = require("express");
const CV = require("../models/cvModel");
// Define storage configuration
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    // Set a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.fieldname + "-" + uniqueSuffix;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

// Create the Multer instance

router.post("/upload-cv", upload.single("cv"), (req, res) => {
  const cvFile = req.body.cv; // The uploaded CV file
  const userId = req.body.userId; // Assuming you have a user authentication system and can access the user ID

  // Save the CV details to the CV collection
  const cv = new CV({
    userId: userId,
    fileName: cvFile.filename,
  });

  cv.save()
    .then(() => {
      res.send("CV uploaded successfully.");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("An error occurred while uploading the CV.");
    });
});

module.exports = router;

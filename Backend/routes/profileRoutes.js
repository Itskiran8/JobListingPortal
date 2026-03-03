const express = require("express");
const router = express.Router();
const User = require("../models/User");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

// Update profile
router.put(
  "/update",
  authMiddleware,
  upload.single("resume"),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) return res.status(404).json({ message: "User not found" });

      // Common fields
      user.phone = req.body.phone || user.phone;

      if (user.role === "jobseeker") {
        user.skills = req.body.skills?.split(",") || user.skills;
        user.education = req.body.education || user.education;

        if (req.file) {
          user.resume = req.file.path;
        }
      }

      if (user.role === "employer") {
        user.companyName = req.body.companyName || user.companyName;
        user.companyWebsite = req.body.companyWebsite || user.companyWebsite;
        user.companyDescription = req.body.companyDescription || user.companyDescription;
        user.companyLocation = req.body.companyLocation || user.companyLocation;
      }

      await user.save();
      res.json({ message: "Profile updated successfully", user });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
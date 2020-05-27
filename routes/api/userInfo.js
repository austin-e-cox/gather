const express = require("express");
const router = express.Router();

// Load User model
const UserInfo = require("../../models/User");

// @route POST api/user
// @desc Emplace UserInfo
// @access Private
router.get("/:id", (req, res) => {
  // validate user has access to this page
  console.log(req.params.id)
  // find the user with the id and return the necessary data
  UserInfo.findOne({ userId: req.params.id }).then(userInfo => {
      if (!userInfo) {
        return res.status(400).json({ group: "User not found" });
      } else {
       console.log(userInfo);
       // groups
       res.json(userInfo);
      };
  });
});

module.exports = router;
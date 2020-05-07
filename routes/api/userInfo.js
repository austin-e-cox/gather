const express = require("express");
const router = express.Router();

// Load User model
const UserInfo = require("../../models/UserInfo");

// @route POST api/user
// @desc Emplace UserInfo
// @access Private
router.get("/user/:id", (req, res) => {
  // validate user has access to this page

  // find the user with the id and return the necessary data
  UserInfo.findOne({ userId: req.body.id }).then(user => {
      if (!user) {
        return res.status(400).json({ group: "User not found" });
      } else {
       console.log(user);
       // groups
       return user
      };
  });
});

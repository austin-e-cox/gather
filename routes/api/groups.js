const express = require("express");
const router = express.Router();

// Load User model
const Group = require("../../models/Group");

// @route POST api/groups
// @desc Emplace Group
// @access Private
router.get("/group/:id", (req, res) => {
  // validate user has access to that group

  // find the group with the id and return the necessary data
  Group.findOne({ groupId: req.body.id }).then(group => {
      if (!group) {
        return res.status(400).json({ group: "Group not found" });
      } else {
       console.log(group);
       // activeUsers and chatLog 
       res.json(group);
      };
  });
});

module.exports = router;
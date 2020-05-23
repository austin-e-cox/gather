const express = require("express");
const router = express.Router();

// Load User model
const Group = require("../../models/Group");

// @route POST api/groups
// @desc Emplace Group
// @access Private
router.get("/:id", (req, res) => {
  // validate user has access to that group

  // find the group with the id and return the necessary data
  Group.findOne({ groupName: req.body.id }).then(group => {
      if (!group) {
        return res.status(400).json({ group: "Group not found" });
      } else {
       console.log(group);
       // activeUsers and chatLog 
       res.json(group);
      };
  });
});

router.post("/:id", (req, res) => {
  // find the group with the id and return the necessary data
  Group.findOne({ groupName: req.params.id }).then(group => {
    if (group) {
      return res.status(400).json({ group: `Group ${groupName} already exists` });
    } else {
      // validate user has access to that group
      Group({
        groupName: req.params.id,
        activeUsers: [],
        chatLog: []
      })
      .save()
      .then(group => {
        console.log("added group:", group)
        res.send(`<h1>Group added!<\h1><h3>${group.groupName}<\h3>`)
      })
      .catch(err => console.log(err));
    }
  });
});


module.exports = router;
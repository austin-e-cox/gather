const express = require("express");
const router = express.Router();

// Load User model
const Group = require("../../models/Group");

// @route GET api/groups
// @desc Get Group
// @access Private
router.get("/:id", (req, res) => {
  // validate user has access to that group?

  // find the group with the id and return the necessary data
  Group.findOne({ groupName: req.body.id })
  .then(group => {
    if (!group) {
      return res.status(400).json({ group: "Group not found" });
    } else {
      // should give us activeUsers and chatLog of group
      //  to pass into chat components
      console.log(group);
      res.json(group);
    };
  });
});

router.post("/:name", (req, res) => {
  // find the group with the id and return the necessary data
  Group.findOne({ groupName: req.params.name }).then(group => {
    // make sure we dont overwrite an existing group
    if (group) {
      return res.status(400).json({ group: `Group ${groupName} already exists` });
    } else {
      // create the group if doesn't exist
      Group({
        groupName: req.params.name,
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
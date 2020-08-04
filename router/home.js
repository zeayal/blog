var express = require("express");
var router = express.Router();

const Issue = require("../model/Issue");
const showdown = require('showdown');
const converter = new showdown.Converter();

router.get("/", async function (req, res) {
  let issues = await Issue.find({}).exec();
  issues = issues.map((item) => ({
    _id: item._id,
    title: item.title,
    created_at: new Date(item.created_at).getTime()
  }));
  console.log('issues', issues)
  res.render("home", {
    title: "博客列表",
    issues: issues,
  });
});

module.exports = router;

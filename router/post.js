const { Router } = require("express");
const router = new Router();
const Issue = require("../model/Issue");
const showdown = require("showdown");

const converter = new showdown.Converter();

router.get("/:id/", async (req, res) => {
  let doc = await Issue.findOne({ _id: req.params.id }).exec();
  doc.body = converter.makeHtml(doc.body);
  res.render("post", {
    issue: doc || {},
  });
});

module.exports = router;

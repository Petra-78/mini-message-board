const { Router } = require("express");
const router = Router();
const messages = require("../data");

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const db = require("../db/queries");

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", async (req, res) => {
  const userName = req.body.userName;
  const message = req.body.message;
  const date = new Date();

  const messages = db.addMessage(userName, message, date);
  res.redirect("/");
});

module.exports = router;

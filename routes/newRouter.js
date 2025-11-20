const { Router } = require("express");
const router = Router();
const messages = require("../data");

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const userName = req.body.userName;
  const message = req.body.message;
  messages.push({
    text: message,
    user: userName,
    date: new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  res.redirect("/");
});

module.exports = router;

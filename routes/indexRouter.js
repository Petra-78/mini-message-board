const { Router } = require("express");
const router = Router();
const db = require("../db/queries");

router.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { messages });
});

module.exports = router;

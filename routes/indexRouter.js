const { Router } = require("express");
const router = Router();
const messagesController = require("../controllers/messagesController");

router.get("/", messagesController.renderMessages);

module.exports = router;

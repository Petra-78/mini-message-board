const { Router } = require("express");
const router = Router();
const messagesController = require("../controllers/messagesController");

router.get("/", messagesController.renderForm);

router.post("/", messagesController.postUploadMessages);

module.exports = router;

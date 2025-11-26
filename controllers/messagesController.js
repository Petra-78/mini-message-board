const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
  body("username")
    .trim()
    .escape()
    .isLength({ min: 2, max: 20 })
    .withMessage(`Username must be 2-20 characters long`),
  body("message")
    .trim()
    .escape()
    .isLength({ min: 1, max: 300 })
    .withMessage("Message must be 1-300 characters long"),
];

const postUploadMessages = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    const inputData = req.body;
    console.log(inputData);

    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
        inputData,
      });
    }
    const { username, message } = matchedData(req);
    const date = new Date();

    try {
      await db.addMessage(username, message, date);
      res.redirect("/");
    } catch (err) {
      console.error("DB error:", err);
      res.status(500).send("Internal Server Error at addMessage");
    }
  },
];

function renderForm(req, res) {
  res.render("form", {
    errors: [],
    inputData: {},
  });
}

async function renderMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    console.log(messages);
    res.render("index", { messages: messages });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).send("Internal Server Error at rendermessages");
  }
}

module.exports = {
  postUploadMessages,
  renderForm,
  renderMessages,
};

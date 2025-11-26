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
  (req, res) => {
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

    db.addMessage(username, message, date);
    res.redirect("/");
  },
];

function renderForm(req, res) {
  res.render("form", {
    errors: [],
    inputData: {},
  });
}

async function renderMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { messages });
}

module.exports = {
  postUploadMessages,
  renderForm,
  renderMessages,
};

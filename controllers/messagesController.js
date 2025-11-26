const db = require("../db/queries");

async function postUploadMessages(req, res) {
  const userName = req.body.userName;
  const message = req.body.message;
  const date = new Date();

  const messages = db.addMessage(userName, message, date);
  res.redirect("/");
}

function renderForm(req, res) {
  res.render("form");
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

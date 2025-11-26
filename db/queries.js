const pool = require("./pool");

async function addMessage(username, message, date) {
  await pool.query(
    "INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)",
    [username, message, date]
  );
}

async function getAllMessages(req, res) {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

module.exports = {
  addMessage,
  getAllMessages,
};

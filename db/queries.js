const pool = require("./pool");

async function addMessage(username, message, date) {
  await pool.query(
    "INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)",
    [username, message, date]
  );
}

async function getAllMessages(req, res) {
  const { rows } = await pool.query("SELECT * FROM messages");
  const formattedMessages = rows.map((msg) => {
    return {
      ...msg,
      date: new Date(msg.date).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  });
  return formattedMessages;
}

module.exports = {
  addMessage,
  getAllMessages,
};

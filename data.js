const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    date: new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short", // "Feb"
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    text: "Hello World!",
    user: "Charles",
    date: new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

module.exports = messages;

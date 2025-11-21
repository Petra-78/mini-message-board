const messages = [
  {
    text: "Hello!",
    user: "Petra-78",
    date: new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short", // "Feb"
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    text: "Welcome to my Mini Message Board! Write a note, share your thoughts, or just leave a quick hello :)",
    user: "Petra-78",
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

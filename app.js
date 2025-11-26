require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

app.use(express.static("public"));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use("/new", newRouter);

console.log("PORT:", process.env.PORT);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "set" : "NOT set");

const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`app listening on ${PORT}`);
});

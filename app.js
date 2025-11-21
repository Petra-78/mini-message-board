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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});

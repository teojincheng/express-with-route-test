const express = require("express");
const app = express();
const data = require("./data");

const booksRouter = require("./books");
const foodRouter = require("./food");

app.use("/books", booksRouter);
app.use("/food", foodRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

module.exports = app;

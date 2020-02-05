const express = require("express");
const app = express();
const PORT = 3000;

const checkColorBlue = (req, res, next) => {
  if (req.query.color && req.query.color === "blue") {
    res.send("you get blue");
  } else {
    next();
  }
};

app.use(checkColorBlue);

app.use((req, res, next) => {
  console.log("common middlware function was called!");
  next();
});

app.use("/books", (req, res, next) => {
  console.log("2nd middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/books", (req, res) => {
  res.send("retrieve a list of books");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

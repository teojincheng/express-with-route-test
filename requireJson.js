const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const users = [];
const requireJsonContent = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    res.status(400).send("Server wants application/json!");
  } else {
    next();
  }
};
app.param("userId", (req, res, next, userId) => {
  req.user = { id: userId, name: "Tom" };
  next();
});
app.post("/", requireJsonContent, (req, res) => {
  const name = req.body.name;
  res.send(`Thanks for your json!!!! name is ${name}`);
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:userId", (req, res) => {
  //req.user = { id: req.params.userId, name: "Tom" };
  console.log(req.user);
  res.send(`my user is: ${req.user.name}`);
});
app.post("/users/:userId", (req, res) => {
  //req.user = { id: req.params.userId, name: "Tom" };
  users.push(req.user);
  res.status(201).send(req.user);
});
app.get("/", (req, res) => {
  console.log(req.color);
  res.send(`my color is: ${req.color}`);
});

/*
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
*/

module.exports = app;

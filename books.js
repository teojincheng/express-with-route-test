const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("retrieved books");
});

router.get("/:bookId/:userId", (req, res) => {
  const responseString = `You requested information on book ${req.params.bookId} and userId ${req.params.userId}`;
  res.send(responseString);
});

router.get("/:bookId", (req, res) => {
  res.send(`You requested information on book ${req.params.bookId}`);
  // NOTE: the above line poses a security issue, we should always treat any user input as unsafe (see XSS attack)
});

module.exports = router;

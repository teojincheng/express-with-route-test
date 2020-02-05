const express = require("express");
const router = express.Router();
const data = require("./data");

router.get("/", (req, res) => {
  const results = data
    .filter(item => (req.query.type ? item.type === req.query.type : true))
    .filter(item => (req.query.name ? item.name === req.query.name : true))
    .filter(item => (req.query.color ? item.color === req.query.color : true));
  res.send(results);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const mailMain = require("./mail");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/mail", (req, res) => {
  mailMain(req.body.mailID, req.body.message)
    .then(() => {
      res.send({ msg: "mail sent" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "mail not sent" });
    });
});

module.exports = router;
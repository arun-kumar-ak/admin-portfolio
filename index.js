const express = require("express");
const mailMain = require("./routes/mail");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/mail", (req, res) => {
  mailMain()
  .then((res) => {
      res.send('mail sent', JSON.stringify(res))
  }).catch((err) => {
    console.log(err);
    res.status(400).send('mail not sent')
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});

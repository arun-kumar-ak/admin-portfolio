const express = require("express");
const mailMain = require("./routes/mail");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.post("/mail", (req, res) => {
  mailMain(req.body.mailID,req.body.message)
  .then(() => {
    res.send({msg:'mail sent'})
  }).catch((err) => {
    console.log(err);
    res.status(400).json({msg:'mail not sent'})
  });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});

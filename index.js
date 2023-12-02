const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", require("./routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});

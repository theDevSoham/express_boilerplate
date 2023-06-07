const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "html", "index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

const express = require("express");
const app = express();
const port = 1212;
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "../client/dist/")));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

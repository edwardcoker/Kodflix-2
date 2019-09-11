const express = require("express");
const shows = require("./shows");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../../build")));

app.get("/rest/shows", (req, res) => res.send(shows()));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../build", "index.html"));
});
app.listen(port, () => console.log(`listening on port ${port}`));

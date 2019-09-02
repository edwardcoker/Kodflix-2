const express = require("express");
const shows = require("./shows");
const app = express();
const port = 3001;

app.get("/rest/shows", (req, res) => res.send(shows()));
app.listen(port, () => console.log(`listening on port ${port}`));

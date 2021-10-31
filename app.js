const express = require("express");
const app = express();

// Add 3rd party packages
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true });

app.listen(8000);

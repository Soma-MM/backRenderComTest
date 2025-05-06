const express = require('express');

const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(cors());

app.use(express.json());

app.post("/callNode", function (req, res) {
    res.status(200).json("Hi React")

});



app.listen(process.env.PORT);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express module
var express = require("express");
// create rest object
var app = express();
// app object used to develop the rest services.
app.get("/sapna", function (req, res) {
    res.status(200).json({ message: " typescript with nodejs..." });
});
// assign port number
app.listen(8080, function () {
    console.log("server is ready");
});

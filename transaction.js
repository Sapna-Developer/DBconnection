"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create sub module
var express = require("express");
var transaction = express.Router();
// "/" is url pattern
transaction.get("/", function (req, res) {
    res.status(200).json({ message: "Transaction soon." });
});
transaction.get("/trans", function (req, res) {
    res.status(200).json({ message: "Welcome to transaction" });
});
exports.default = transaction;

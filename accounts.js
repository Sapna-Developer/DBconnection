"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to accounts module" });
});
accounts.post("/acc", function (req, res) {
    res.status(200).json({ message: "account will be added soon" });
});
exports.default = accounts;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transaction_1.default);
app.use("/module2", accounts_1.default);
app.listen(8008, function () {
    console.log("server started");
});
// http://localhost:8080/module1
// http://localhost:8080/module1/trans
// http://localhost:8080/module2 [GET]
// http://localhost:8080/module2 [POST]

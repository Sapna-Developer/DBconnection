"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// http://localhost:8080/login?uname=sapna&upwd=sapn@
// import express module
var express = require("express");
// create global object app to create rest services
var app = express();
// perform some authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "DreamIT") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
// arg1=pass url pattern in major object
// arg2=req and res object are predefined in nodejs
// data type is any
// data coming from client is stored in req object
// data is responded by res object
// below logic is a authentication logic
// get request
app.get("/login", [auth], function (req, res) {
    // create query by query property
    if (req.query.uname === "sapna" && req.query.upwd === "sapn@") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(400).json({ login: "fail" });
    }
});
// default request
app.get("/", function (req, res) {
    res.sendFile("/home/digi/nodejs/DBconnection/getparameters/index.html");
});
app.listen(8001, function () {
    console.log("server started successfully");
});

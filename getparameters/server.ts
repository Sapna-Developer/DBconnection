// http://localhost:8080/login?uname=sapna&upwd=sapn@
// import express module
import * as express from "express";

// create global object app to create rest services
let app: any = express();

// perform some authorization
let auth = (req: any, res: any, next: any): any => {
  let allHeaders = req.headers;
  if (allHeaders.token === "DreamIT") {
    next();
  } else {
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
app.get("/login", [auth], (req: any, res: any) => {
  // create query by query property
  if (req.query.uname === "sapna" && req.query.upwd === "sapn@") {
    res.status(200).json({ login: "success" });
  } else {
    res.status(400).json({ login: "fail" });
  }
});

// default request
app.get("/", (req: any, res: any): any => {
  res.sendFile("/home/digi/nodejs/DBconnection/getparameters/index.html");
});
app.listen(8001, () => {
  console.log("server started successfully");
});

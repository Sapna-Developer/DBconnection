// read get parameter in expressjs
import * as express from "express";

// create rest object
let app: any = express();
// app.get("/login/uname/:uname/upwd/:upwd", (req: any, res: any) => {
//   if (req.params.uname === "admin" && req.params.upwd === "admin0") {
//     // res.send({ login: "Success" });
//     res.status(200).json({ login: "success" });
//   } else {
//     // res.send({ login: "fail" });
//     res.status(400).json({ login: "fail" });
//   }
//   console.log(req.params.uname, req.params.upwd);
// });

app.get("/login", (req: any, res: any) => {
  if (req.query.uname === "admin" && req.query.upwd === "admin0") {
    res.status(201).json({ login: "success" });
  } else {
    res.status(401).json({ login: "fail" });
  }
});

app.listen(8008, () => {
  console.log("server started");
});
// http://localhost:8080/login/uname/admin/upwd/admin0
// http://localhost:8080/login?uname=admin&upwd=admin0

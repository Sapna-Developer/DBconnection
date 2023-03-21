// import express module
import * as express from "express";

// create rest object
let app: any = express();
// app object used to develop the rest services.

app.get("/sapna", (req: any, res: any): any => {
  res.status(200).json({ message: " typescript with nodejs..." });
});
// assign port number
app.listen(8080, () => {
  console.log("server is ready");
});

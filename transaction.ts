// create sub module
import * as express from "express";

let transaction: any = express.Router();
// "/" is url pattern
transaction.get("/", (req: any, res: any): any => {
  res.status(200).json({ message: "Transaction soon." });
});

transaction.get("/trans", (req: any, res: any): any => {
  res.status(200).json({ message: "Welcome to transaction" });
});
export default transaction;

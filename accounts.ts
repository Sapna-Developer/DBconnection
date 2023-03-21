import * as express from "express";

let accounts: any = express.Router();

accounts.get("/", (req: any, res: any): any => {
  res.status(200).json({ message: "Welcome to accounts module" });
});

accounts.post("/acc", (req: any, res: any): any => {
  res.status(200).json({ message: "account will be added soon" });
});

export default accounts;

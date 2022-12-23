import { Router } from "express";
import CreateReminder from "../interfaces/create-reminder";

const router = Router();

router.get("/", (req, res) => {
  res.send("list of reminder");
});

router.post("/", (req, res) => {
  let { title } = <CreateReminder>req.body;
  res.json(title);
});

export default router;

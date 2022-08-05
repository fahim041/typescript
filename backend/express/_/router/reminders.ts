import { Router } from "express";
import Reminder from "../models/reminders";
const router = Router();
const reminders: Reminder[] = [];

interface CreateRemindar {
  title: string;
}

router.get("/", (req, res) => {
  res.send("List");
});

router.post("/", (req, res) => {
  const { title } = <CreateRemindar>req.body;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(200).send(reminders);
});

export default router;

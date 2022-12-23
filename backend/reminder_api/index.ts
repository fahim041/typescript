import express from "express";

import reminderRouter from "./routers/reminder";

const app = express();

app.use(express.json());

app.use("/reminders", reminderRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(3000, () => console.log("server started!"));

import express from "express";
import reminderRouter from "./router/reminders";

const app = express();
app.use(express.json());

app.use("/reminders", reminderRouter);

app.listen(3000, () => console.log("Server started"));

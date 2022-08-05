import React, { useState, useEffect } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminder();
  }, []);

  const loadReminder = async () => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    let newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}></NewReminder>
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;

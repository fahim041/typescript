import React, {useEffect, useState} from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import ReminderService from "./services/reminder";

function App() {
  const [reminders, setRemiders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminder();
  }, [])

  const loadReminder = async() => {
    const reminders: Reminder[] = await ReminderService.getReminders();
    setRemiders(reminders);
  }

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;

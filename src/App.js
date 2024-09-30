import React, { useState } from 'react';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';
import './App.css';

const App = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const updateReminder = (updatedReminder) => {
    setReminders(reminders.map((reminder) =>
      reminder.id === updatedReminder.id ? updatedReminder : reminder
    ));
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="app">
      <h1>Reminder App</h1>
      <ReminderForm addReminder={addReminder} />
      <ReminderList 
        reminders={reminders} 
        updateReminder={updateReminder} 
        deleteReminder={deleteReminder} 
      />
    </div>
  );
};

export default App;

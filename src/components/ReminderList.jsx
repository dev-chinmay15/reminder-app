import React from 'react';
import Reminder from './Reminder';

const ReminderList = ({ reminders, updateReminder, deleteReminder }) => {
  const upcomingReminders = reminders.filter(reminder => new Date(reminder.dateTime) >= new Date());
  const pastReminders = reminders.filter(reminder => new Date(reminder.dateTime) < new Date());

  return (
    <div>
      <h2>Upcoming Reminders</h2>
      {upcomingReminders.length === 0 ? (
        <p>No upcoming reminders</p>
      ) : (
        upcomingReminders.map(reminder => (
          <Reminder 
            key={reminder.id} 
            reminder={reminder} 
            updateReminder={updateReminder} 
            deleteReminder={deleteReminder} 
          />
        ))
      )}
      <h2>Past Reminders</h2>
      {pastReminders.length === 0 ? (
        <p>No past reminders</p>
      ) : (
        pastReminders.map(reminder => (
          <Reminder 
            key={reminder.id} 
            reminder={reminder} 
            updateReminder={updateReminder} 
            deleteReminder={deleteReminder} 
          />
        ))
      )}
    </div>
  );
};

export default ReminderList;

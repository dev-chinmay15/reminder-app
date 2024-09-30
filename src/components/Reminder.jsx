import React from 'react';

const Reminder = ({ reminder, updateReminder, deleteReminder }) => {
  const handleEdit = () => {
    const updatedReminder = { ...reminder, title: prompt('Update title:', reminder.title), dateTime: prompt('Update date and time:', reminder.dateTime) };
    updateReminder(updatedReminder);
  };

  return (
    <div>
      <h3>{reminder.title}</h3>
      <p>{new Date(reminder.dateTime).toLocaleString()}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteReminder(reminder.id)}>Delete</button>
    </div>
  );
};

export default Reminder;

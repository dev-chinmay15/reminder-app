import React, { useState } from 'react';

const ReminderForm = ({ addReminder }) => {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      addReminder({ id: currentId, title, dateTime });
      setIsEditing(false);
    } else {
      addReminder({ id: Date.now(), title, dateTime });
    }
    setTitle('');
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Reminder Title" 
        required 
      />
      <input 
        type="datetime-local" 
        value={dateTime} 
        onChange={(e) => setDateTime(e.target.value)} 
        required 
      />
      <button type="submit">{isEditing ? 'Update Reminder' : 'Add Reminder'}</button>
    </form>
  );
};

export default ReminderForm;

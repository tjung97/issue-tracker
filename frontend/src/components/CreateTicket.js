// src/components/CreateTicket.js
import React, { useState } from 'react';
import { createTicket } from '../api';

const CreateTicket = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTicket = { title };
      const createdTicket = await createTicket(newTicket);
      onCreate(createdTicket); // Callback to parent to update the ticket list
      setTitle(''); // Clear the form input
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ticket Title"
          required
        />
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;

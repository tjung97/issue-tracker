// src/components/CreateTicket.js
import React, { useState } from 'react';
import { createTicket } from '../api';

const CreateTicket = ({ onCreate }) => {
  const [ticketData, setTicketData] = useState({
    authorName: '', // For `author.name`
    location: '',
    priority: '',
    status: '',
  });

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTicket = {
        author: { name: ticketData.authorName },
        location: ticketData.location,
        priority: parseInt(ticketData.priority, 10), // Convert priority to a number
        status: ticketData.status,
      };
      const createdTicket = await createTicket(newTicket);
      onCreate(createdTicket); // Callback to parent to update the ticket list
      setTicketData({
        authorName: '',
        location: '',
        priority: '',
        status: '',
      }); // Reset form inputs
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div>
      <h2>Create Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="authorName"
          value={ticketData.authorName}
          onChange={handleInputChange}
          placeholder="Author Name"
          required
        />
        <br/>
        <input
          type="text"
          name="location"
          value={ticketData.location}
          onChange={handleInputChange}
          placeholder="Location"
          required
        />
        <br/>
        <input
          type="number"
          name="priority"
          value={ticketData.priority}
          onChange={handleInputChange}
          placeholder="Priority (1-5)"
          required
        />
        <br/>
        <select
          name="status"
          value={ticketData.status}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <br/>
        <button type="submit">Create Issue</button>
      </form>
    </div>
  );
};


export default CreateTicket;

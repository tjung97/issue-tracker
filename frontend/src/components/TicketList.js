// src/components/TicketList.js
import React, { useEffect, useState } from 'react';
import { getTickets, deleteTicket } from '../api';

const TicketList = ({ onDelete }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const ticketData = await getTickets();
        setTickets(ticketData);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [onDelete]);

  const handleDelete = async (ticketId) => {
    try {
      await deleteTicket(ticketId);
      onDelete(ticketId); // Callback to parent to update the list
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <p><strong>Author:</strong> {ticket.author.name}</p>
            <p><strong>Location:</strong> {ticket.location}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <button onClick={() => handleDelete(ticket._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;

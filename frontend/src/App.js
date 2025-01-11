import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TicketList from './components/TicketList';
import CreateTicket from './components/CreateTicket';

function App() {
  const [tickets, setTickets] = useState([]);

  const handleTicketCreate = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  const handleTicketDelete = (deleteTicketId) => {
    setTickets(tickets.filter((ticket) => ticket.id !== deleteTicketId));
  };

  return (
    <div>
      <div>issue ticket tracker</div>
      <CreateTicket onCreate={handleTicketCreate} />
      <TicketList tickets={tickets} onDelete={handleTicketDelete} />
    </div>
  );
}

export default App;

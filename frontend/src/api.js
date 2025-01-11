// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tickets'; // Change to your server's URL

// Function to create a new ticket
export const createTicket = async (ticketData) => {
  try {
    const response = await axios.post(API_URL, ticketData);
    return response.data;
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
};

// Function to delete a ticket by ID
export const deleteTicket = async (ticketId) => {
  try {
    const response = await axios.delete(`${API_URL}/${ticketId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting ticket:', error);
    throw error;
  }
};

// Function to fetch all tickets
export const getTickets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

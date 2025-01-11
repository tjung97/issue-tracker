const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Create a new ticket
router.post('/', async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.send(tickets);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a ticket
router.put('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).send('Ticket not found');
    res.send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a ticket
router.delete('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');
    res.send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

const express = require('express');
const User = require('../models/User'); // Your User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Sign Up (Account Creation)
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Sign In (Authentication)
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      console.log("no user!");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      console.log("does not match!");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    //const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const token = 123456;
    res.json({ message: 'Login successful', token });
    console.log("login done from server")
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

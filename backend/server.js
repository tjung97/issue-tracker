const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const ticketsRouter = require('./routes/ticketRoutes');

app.use('/api/tickets', ticketsRouter); // use the router for tickets

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

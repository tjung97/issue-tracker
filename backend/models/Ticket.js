const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    location: { 
        type: String, 
        required: true 
    },
    author: {
        // id: { 
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref: 'User', 
        //     required: true 
        // },
        name: { 
            type: String, 
            required: true 
        },
    },
    priority: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['open', 'in-progress', 'closed'], 
        default: 'open' 
    },
});

module.exports = mongoose.model('Ticket', TicketSchema);

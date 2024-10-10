const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    task: {
      type: String,
      required: [true, 'Please enter task title!']
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending'
    },
    uploadDate: {
      type: Date,
      default: Date.now
    },
    decisionDate: {
      type: Date
    }
  });
  
  module.exports = mongoose.model('Assignment', AssignmentSchema);
  
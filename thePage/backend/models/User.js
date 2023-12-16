const mongoose = require('mongoose');
const userSchema = require('./UserSchema');

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;

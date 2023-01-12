const mongoose = require('mongoose');

const SkateparkenSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String }
}, {
    collection: 'Skateparken'
});

module.exports = mongoose.model('Skateparken', SkateparkenSchema);
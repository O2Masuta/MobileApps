const mongoose = require('mongoose');

const SkateshopsSchema = new mongoose.Schema({
    url: { type: String },
}, {
    collection: 'Skateshops'
});

module.exports = mongoose.model('Skateshops', SkateshopsSchema);
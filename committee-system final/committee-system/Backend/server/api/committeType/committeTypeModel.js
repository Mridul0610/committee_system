const mongoose = require('mongoose')
const committeTypeSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    thumbnail: { type: String, default: 'No Thumbnail' },
    description: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('committeType', committeTypeSchema)
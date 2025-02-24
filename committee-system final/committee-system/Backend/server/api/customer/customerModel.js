const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    contact: { type: Number },
    profile: { type: String, default: '/Noimage.jpg' },
    address: { type: String, default: '' },
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    userType: { type: Number, default: 2 },// 1 - Admin, 2 - customer
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('customer', customerSchema)
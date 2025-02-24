const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'customer'},
    propertyAdvisorId: {type: mongoose.Schema.Types.ObjectId, ref: 'propertyDealer'},
    password: { type: String, default: '' },
    userType: { type: Number, default: 2 },// 1 - Admin, 2 - property Dealer 3 - customer
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('user', userSchema)
const mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({
    committeDetailId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'committeDetail' },
    customerId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'customer' },
    enrollmentDate: { type:Date, default: null },
    createdAt: { type: Date, default: Date.now },
    status: { type: Number, default: 1 } // 1- pending 2- approve 3- decline  
})
module.exports = mongoose.model('request', requestSchema)
const mongoose = require('mongoose')
const committeDetailSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    title: { type: String, default: '' },
    committeTypeId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'committeType' },
    members: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 },
    perMemberAmount: { type: Number, default: 0 },
    startMonth: { type: Date, default: null },
    endMonth: { type: Date, default: null },
    description: { type: String, default: 'No Description' },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model('committeDetail', committeDetailSchema)
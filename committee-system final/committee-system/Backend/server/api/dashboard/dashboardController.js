const CommitteData = require('../committeType/committeTypeModel')
const Customers = require('../customer/customerModel')
const Booking = require('../request/requestModel')

const dashboard = async (req, res) => {
    let totalCommittee = await CommitteData.countDocuments()
    let totalCustomers = await Customers.countDocuments()
    let totalBookings = await Booking.countDocuments()
    res.send({
        success: true,
        status: 200,
        message: 'Welcome Admin',
        totalCommittee: totalCommittee,
        totalCustomers: totalCustomers,
        totalBookings: totalBookings,

    })

}
module.exports = { dashboard }
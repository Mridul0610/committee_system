const Request = require('./requestModel')
const CommitteDetail = require('../committeDetail/committeDetailModel')


const add = async (req, res) => {
    let validation = ''
    if (!req.body.committeDetailId)
        validation += ' Committe is required '
    if (!req.body.customerId)
        validation += ' customerId is required '
    if (!req.body.enrollmentDate)
        validation += ' enrollmentDate is required '
    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {
        await Request.findOne({ customerId: req.body.customerId, committeDetailId: req.body.committeDetailId }).then(async (RequestData) => {
            if (RequestData) {
                res.send({
                    success: false, status: 400, message: "You have already sent the request"
                })
            }
            else {
                CommitteDetail.findOne({ _id: req.body.committeDetailId }).then((committeData) => {
                    const enrollment = new Date(req.body.enrollmentDate);
                    const committeDate = new Date(committeData.startMonth);
                    console.log('committe date',committeDate);
                    if (enrollment <= committeDate) {
                        const newRequest = new Request()
                        newRequest.committeDetailId = req.body.committeDetailId
                        newRequest.customerId = req.body.customerId
                        newRequest.enrollmentDate = req.body.enrollmentDate
                        newRequest.save().then((result) => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Request Sent Successfully , Wait for Approval",
                                data: result

                            })
                        }).catch((err) => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message

                            })
                        })
                    }
                    else {
                        res.send({
                            success: false,
                            status: 500,
                            message: 'The date for registering with the committee has expired'

                        })
                    }

                }).catch((err) => {
                    res.send({
                        success: true,
                        status: 200,
                        message: err.message

                    })
                })
            }

        }).catch((err) => {
            res.send({
                success: true,
                status: 200,
                message: err.message

            })
        })
    }
}

const changeStatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require '
    if (!req.body.status)
        validation += 'status is required '
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        Request.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'No Request found' })
                else {
                    CommitteDetail.findOne({ _id: result.committeDetailId })
                        .then(async (CommitteData) => {
                            if (!!req.body.status) {
                                if (req.body.status == 2) {
                                    const approvedMembersCount = await Request.countDocuments({ committeDetailId: CommitteData._id, status: 2 })
                                    const Committemember = CommitteData.members
                                    if (approvedMembersCount < Committemember) {
                                        result.status = req.body.status

                                    }
                                    else {
                                        return res.send({ success: false, status: 500, message: 'members are full' })

                                    }
                                }
                                else {
                                    result.status = req.body.status
                                }

                            }
                            result.save()
                                .then(updatedResult => {
                                    res.send({ success: true, status: 200, message: "Status Changed Successfully", data: updatedResult })
                                })
                                .catch(error => {
                                    res.send({ success: false, status: 500, message: error.message })
                                })

                        }).catch(error => {
                            res.send({ success: false, status: 500, message: error.message })
                        })

                }
            })
            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })
    }
}

const allRequests = (req, res) => {
    Request.find(req.body).sort({ createdAt: -1 }).populate('customerId').populate({
        path: 'committeDetailId',
        populate: { path: 'committeTypeId' }
    })
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "Loaded Successfully",
                data: data,
                total: data.length
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}



module.exports = { add, allRequests, changeStatus }
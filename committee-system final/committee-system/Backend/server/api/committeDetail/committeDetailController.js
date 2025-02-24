const CommitteDetail = require('./committeDetailModel')


const add = async (req, res) => {
    let validation = ''
    if (!req.body.title) {
        validation += ' title is required '
    }
    if (!req.body.committeTypeId) {
        validation += ' committeTypeId is required '
    }
    if (!req.body.members) {
        validation += ' members is required '
    }
    if (!req.body.month) {
        validation += ' month is required '
    }
    if (!req.body.totalAmount) {
        validation += ' totalAmount is required '
    }
    if (!req.body.perMemberAmount) {
        validation += ' perMemberAmount is required '
    }
    if (!req.body.startMonth) {
        validation += ' startMonth is required '
    }
    if (!req.body.endMonth) {
        validation += ' endMonth is required '
    }
    if (!req.body.description) {
        validation += ' description is required '
    }
    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {

        let total = await CommitteDetail.countDocuments()
        let newCommitteDetail = new CommitteDetail()
        newCommitteDetail.autoId = total + 1
        newCommitteDetail.title = req.body.title
        newCommitteDetail.committeTypeId = req.body.committeTypeId
        newCommitteDetail.members = req.body.members
        newCommitteDetail.month = req.body.month
        newCommitteDetail.totalAmount = req.body.totalAmount
        newCommitteDetail.perMemberAmount = req.body.perMemberAmount
        newCommitteDetail.startMonth = req.body.startMonth
        newCommitteDetail.endMonth = req.body.endMonth
        newCommitteDetail.description = req.body.description
        await newCommitteDetail.save()
            .then(async (savedCommitteDetail) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "Added Successfully",
                    data: savedCommitteDetail
                })

            }).catch((err) => {
                res.send({ success: false, status: 500, message: err.message })

            })
    }
}

const update = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require'

    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        CommitteDetail.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'CommitteDetail not found' })
                else {
                    if (!!req.body.title) {
                        result.title = req.body.title
                    }
                    if (!!req.body.committeTypeId) {
                        result.committeTypeId = req.body.committeTypeId
                    }
                    if (!!req.body.members) {
                        result.members = req.body.members
                    }
                    if (!!req.body.month) {
                        result.month = req.body.month
                    }
                    if (!!req.body.totalAmount) {
                        result.totalAmount = req.body.totalAmount
                    }
                    if (!!req.body.perMemberAmount) {
                        result.perMemberAmount = req.body.perMemberAmount
                    }
                    if (!!req.body.startMonth) {
                        result.startMonth = req.body.startMonth
                    }
                    if (!!req.body.endMonth) {
                        result.endMonth = req.body.endMonth
                    }
                    if (!!req.body.description) {
                        result.description = req.body.description
                    }
                    
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "Committe Detail Updated Successfully", data: updatedResult })
                        })
                        .catch(error => {
                            res.send({ success: false, status: 500, message: error.message })
                        })
                }
            })
            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })

    }
}


const changeStatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require '
    if (!req.body.status)
        validation += ' status is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        CommitteDetail.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'No CommitteDetail Found' })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "Status Changed Successfully", data: updatedResult })
                        })
                        .catch(error => {
                            res.send({ success: false, status: 500, message: error.message })
                        })
                }
            })
            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })

    }
}

const single = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation = "_id is required"
    }
    if (!!validation) {
        res.send({ success: false, status: 500, message: validation })
    }
    else {
        CommitteDetail.findOne({ _id: req.body._id }).populate('committeTypeId')
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "CommitteDetail Does not exist" })
                }
                else
                    res.send({ success: true, status: 200, message: " CommitteDetail Loaded Successfully", data: data })
            })
            .catch((err) => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}



const all = (req, res) => {
    CommitteDetail.find(req.body).populate('committeTypeId')
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "Properties Loaded Successfully",
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







module.exports = { add, update, changeStatus, single, all }
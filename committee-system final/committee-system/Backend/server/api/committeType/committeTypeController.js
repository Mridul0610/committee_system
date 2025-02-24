const CommitteType = require('./committeTypeModel')


const add = async (req, res) => {
    let validation = ''
    if (!req.body.name)
        validation += ' name is required '
    if (!req.file)
        validation += ' thumbnail is required '
    if (!req.body.description)
        validation += ' description is required '

    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {
        let totalCommitteTypes = await CommitteType.countDocuments()
        let newType = new CommitteType()
        newType.autoId = totalCommitteTypes + 1
        newType.name = req.body.name
        newType.thumbnail = "types/" + req.file.filename
        newType.description = req.body.description
        await newType.save()
            .then(async (savedType) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "Added Successfully",
                    data: savedType
                })

            }).catch((err) => {
                res.send({ success: false, status: 500, message: err.message })

            })
    }
}

const all = (req, res) => {
    CommitteType.find(req.body).sort({ createdAt: -1 })
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

const single = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation = "_id is required"
    }
    if (!!validation) {
        res.send({ success: false, status: 500, message: validation })
    }
    else {
        CommitteType.findOne({ _id: req.body._id })
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "CommitteType Does not exist" })
                }
                else
                    res.send({ success: true, status: 200, message: "Loaded Successfully", data: data })
            })
            .catch((err) => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}


const  update = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require'

    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        CommitteType.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'CommitteType not found' })
                else {
                    if (!!req.body.name)
                        result.name = req.body.name
                    if (!!req.file)
                        result.thumbnail = "types/" + req.file.filename
                    if (!!req.body.description)
                        result.description = req.body.description
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "Update Successfully", data: updatedResult })
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
        validation += '_id is require'
    if (!req.body.status)
        validation += 'status is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        CommitteType.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'No CommitteType Found' })
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



module.exports = { add, all, single, update, changeStatus }
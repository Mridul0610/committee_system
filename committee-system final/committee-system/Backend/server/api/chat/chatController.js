const chatModel = require('./chatModel')
// Add chat Api Validations
const add = async (req, res) => {
    let validation = ""
    if (!req.body.firstUserId) {
        validation += "firstUserId is Required "
    }
    if (!req.body.secondUserId) {
        validation += "secondUserId is Required "
    }
    if (!req.body.message) {
        validation += "message are Required "
    }
    if (!req.body.fromId) {
        validation += "fromId are Required "
    }
    if (!!validation) {
        return res.json({
            success: false,
            status: 400,
            message: "Validation Error : " + validation
        })
    }
    else {
        let prevChat = await chatModel.find({
            $or: [
                {
                    $and: [
                        { firstUserId: req.body.firstUserId },
                        { secondUserId: req.body.secondUserId },
                    ]
                },
                {
                    $and: [
                        { firstUserId: req.body.secondUserId },
                        { secondUserId: req.body.firstUserId },
                    ]
                }
            ]
        })
        if (prevChat.length == 0) {
            let total = await chatModel.countDocuments()
            let newChat = new chatModel()
            newChat.autoId = total + 1
            newChat.firstUserId = req.body.firstUserId
            newChat.secondUserId = req.body.secondUserId
            let newMessage = {
                fromId: req.body.fromId,
                message: req.body.message
            }
            newChat.messages = [newMessage]

            newChat.save()
                .then(result => {
                    res.send({
                        success: true,
                        status: 200,
                        message: "New Chat begins",
                        data: result
                    })
                })
                .catch(err => {
                    res.send({
                        success: false,
                        status: 500,
                        message: err.message
                    })
                })
        }
        else {
            let messageArray = []

            messageArray = prevChat[0].messages
            let newMessage = {
                fromId: req.body.fromId,
                message: req.body.message
            }
            messageArray.push(newMessage)
            prevChat[0].messages = messageArray
            prevChat[0].save()
                .then(result => {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Chat Updated",
                        data: result
                    })
                })
                .catch(err => {
                    res.send({
                        success: false,
                        status: 500,
                        message: err.message
                    })
                })
        }
    }
}
const addEmptyChat = async (req, res) => {
    let validation = ""
    if (!req.body.firstUserId) {
        validation += "firstUserId is Required "
    }
    if (!req.body.secondUserId) {
        validation += "secondUserId is Required "
    }
    if (!!validation) {
        return res.json({
            success: false,
            status: 400,
            message: "Validation Error : " + validation
        })
    }
    else {
        let prevChat = await chatModel.find({
            $or: [
                {
                    $and: [
                        { firstUserId: req.body.firstUserId },
                        { secondUserId: req.body.secondUserId },
                    ]
                },
                {
                    $and: [
                        { firstUserId: req.body.secondUserId },
                        { secondUserId: req.body.firstUserId },
                    ]
                }
            ]
        })
        if (prevChat.length == 0) {
            let total = await chatModel.countDocuments()
            let newChat = new chatModel()
            newChat.autoId = total + 1
            newChat.firstUserId = req.body.firstUserId
            newChat.secondUserId = req.body.secondUserId

            newChat.messages = []

            newChat.save()
                .then(result =>  result.populate(['firstUserId', 'secondUserId']) )
                        .then(result2 => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "New Chat begins",
                                data: result2
                            })
                        })
                        .catch(err => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })

                // })
                // .catch(err => {
                //     res.send({
                //         success: false,
                //         status: 500,
                //         message: err.message
                //     })
                // })
        }
        else {

            res.send({
                success: false,
                status: 200,
                message: "Chat Already Exists",
            })

        }
    }
}
// Find function for view All chat
const all = (req, res) => {
    let validation = ""
    if (!req.body.userId) {
        validation += "userId is required"
    }
    if (!!validation) {
        return res.json({
            success: false,
            status: 400,
            message: "Validation Error : " + validation
        })
    }
    else {
        chatModel.find({
            $or: [
                { firstUserId: req.body.userId },
                { secondUserId: req.body.userId }
            ]
        })
            .populate('firstUserId')
            .populate('secondUserId')
            .exec()
            .then((result) => {
                res.json({
                    success: true,
                    status: 200,
                    message: "All chat Loaded",
                    total: result.length,
                    data: result
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }

}
// validations for view Single by _id
const single = (req, res) => {
    let validation = ""
    if (!req.body.fromId) {
        validation = "fromId is required"
    }
    if (!req.body.toId) {
        validation = "toId is required"
    }

    if (!!validation) {
        return res.json({
            success: false,
            status: 400,
            message: "Validation Error " + validation
        })
    }
    else { // Find one function for view Single skill by _id
        chatModel.find({
            $or: [
                {
                    $and: [
                        { firstUserId: req.body.fromId },
                        { secondUserId: req.body.toId }
                    ]
                },
                {
                    $and: [
                        { firstUserId: req.body.toId },
                        { secondUserId: req.body.fromId }
                    ]
                }
            ]
        }).exec()
            .then((result) => {
                if (result.length == 0) { // null id valodation 
                    return res.json({
                        success: false,
                        status: 404,
                        message: "chat dose not exist"
                    })
                }
                else {
                    result[0].messages = result[0].messages.filter((x) => { return x.status == true })
                    res.json({
                        success: true,
                        status: 200,
                        message: "single chat response",
                        data: result[0]
                    })
                }
            })
            .catch((err) => {
                res.json({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}
// validations for view Single by _id
const singleById = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation = "_id is required"
    }

    if (!!validation) {
        return res.json({
            success: false,
            status: 400,
            message: "Validation Error " + validation
        })
    }
    else { // Find one function for view Single skill by _id
        chatModel.find({ _id: req.body._id })
            .populate('firstUserId')
            .populate('secondUserId')
            .exec()
            .then((result) => {
                if (result == null) { // null id valodation 
                    return res.json({
                        success: false,
                        status: 404,
                        message: "chat dose not exist"
                    })
                }
                else {
                    result[0].messages = result[0].messages.filter((x) => { return x.status == true })
                    res.json({
                        success: true,
                        status: 200,
                        message: "single chat response",
                        data: result[0]
                    })
                }
            })
            .catch((err) => {
                res.json({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}
// Delete msg Api
const delMessage = (req, res) => {
    let validation = ""
    if (!req.body.chatId) {
        validation += "chatId is required"
    }
    if (!req.body.messageId) {
        validation += "messageId is required"
    }

    if (!!validation) {
        return res.json({
            success: false,
            status: 400,
            message: "Validation Error " + validation
        })
    }
    else {
        chatModel.findOne({ _id: req.body.chatId }).exec()
            .then((chatData) => {
                if (chatData == null) {
                    return res.json({
                        success: false,
                        status: 400,
                        message: "Chat Does not exist"
                    })
                }
                else {
                    let messageArray = chatData.messages
                    messageArray = messageArray.map((ele)=>{
                        if(ele._id == req.body.messageId){
                            ele.status = false
                        }
                        return ele
                    })
                    chatData.messages = messageArray
                    chatData.save()
                        .then(updatedData => {
                            return res.json({
                                success: true,
                                status: 200,
                                message: "Message Deleted",
                                updatedData
                            })
                        })
                        .catch(err => {
                            return res.json({
                                success: success,
                                status: 500,
                                message: "Error : " + err.message
                            })
                        })
                }
            })
            .catch()
    }
}

module.exports = { add, all, single, singleById, delMessage, addEmptyChat }